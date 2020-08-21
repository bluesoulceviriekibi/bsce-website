#!/usr/bin/env bash
python upload_aloglia_index.py \
    -f "$index_file" \
    -a "$app_id" \
    -k "$admin_api_key" \
    -n "$index_name" \
    -u "$base_url"