#!/bin/bash
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

mkdir -p add

protoc -I . \
add.proto \
--go_out=plugins=grpc:add \
--js_out=import_style=commonjs:add \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:add