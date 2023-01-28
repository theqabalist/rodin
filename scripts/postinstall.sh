#!/bin/bash

set -euo pipefail

pushd src
ln -fFhs lib node_modules
popd
