#/bin/bash
ng build
#upload files
aws s3 cp ./dist/BulbController s3://cloud.flashlights.com --recursive --acl public-read