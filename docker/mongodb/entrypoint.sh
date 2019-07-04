#!/usr/bin/env sh

# Set admin user from environment
MONGODB_ADMIN_USER=${MONGO_INITDB_ROOT_USERNAME:-"admin"}
MONGODB_ADMIN_PASS=${MONGO_INITDB_ROOT_PASSWORD:-$(pwgen -s -1 16)}
MONGODB_APPLICATION_DATABASE=${MONGODB_APPLICATION_DATABASE:-'admin'}
MONGODB_APPLICATION_USER=${MONGODB_APPLICATION_USER:-'mongo'}
MONGODB_APPLICATION_PASS=${MONGODB_APPLICATION_PASS:-$(pwgen -s -1 16)}

if [ ! -z "$MONGODB_APPLICATION_DATABASE" ]
then
    ROLE=${MONGODB_ROLE:-dbOwner}
else
    ROLE=${MONGODB_ROLE:-dbAdminAnyDatabase}
fi

# short circuit if first arg is not 'mongod'
[ "$1" = "mongod" ] || exec "$@" || exit $?

: ${MONGODB_ADMIN_USER}
: ${ONGODB_ADMIN_PASS}

# Database owned by mongodb
[ "$(stat -c %U /data/db)" = mongodb ] || chown -R mongodb /data/db

if ! [ -f /data/db/.passwords_set ]; then

    eval su -s /bin/sh -c "mongod" mongodb &

    RET=1
    while [ $RET -ne 0 ]; do
        sleep 3
        mongo admin --eval "help" >/dev/null 2>&1
        RET=$?
    done

    # Create the admin user
    echo "=> Creating admin user with a password in MongoDB"
    mongo admin --eval \
        "db.createUser({user: '${MONGODB_ADMIN_USER}',
            pwd: '${MONGODB_ADMIN_PASS}',
            roles: [{role: 'root', db: 'admin'}]
        });"

    sleep 3
    # Create the App User
    mongo ${MONGODB_APPLICATION_DATABASE} --eval \
        "db.createUser({user: '${MONGODB_APPLICATION_USER}',
            pwd: '${MONGODB_APPLICATION_PASS}',
            roles: [{role: '${ROLE}', db: '${MONGODB_APPLICATION_DATABASE}'}]
        });"
    echo "Used by construlab/mongo-alpine docker container." > /data/db/.passwords_set
    echo "DO NOT DELETE" >> /data/db/.passwords_set
    mongod --shutdown
fi

cmd="$@"

# Drop root privilege (no way back), exec provided command as user mongodb
#cmd=exec; for i; do cmd="$cmd '$i'"; done

exec su -s /bin/sh -c "$cmd -f /etc/mongod.conf" mongodb

echo "========================================================================"
echo "MongoDB Root: ${MONGODB_ADMIN_USER}"
echo "MongoDB Root Password: ${MONGODB_ADMIN_PASS}"
echo "MongoDB User: ${MONGODB_APPLICATION_USER}"
echo "MongoDB Password: ${MONGODB_APPLICATION_PASS}"
echo "MongoDB Database: ${MONGODB_APPLICATION_DATABASE}"
echo "MongoDB Role: ${ROLE}"
echo "========================================================================"
