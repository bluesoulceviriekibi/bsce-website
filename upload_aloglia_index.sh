#!/usr/bin/env bash

index_file="$PWD/public/index.js"
app_id="$ALGOLIA_APP_ID"
admin_api_key="$ALGOLIA_ADMIN_API_KEY"
index_name="bluesoulceviriekibi"

python upload_aloglia_index.py \
    -f "$index_file" \
    -a "$app_id" \
    -k "$admin_api_key" \
    -n "$index_name"
