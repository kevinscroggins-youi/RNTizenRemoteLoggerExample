#!/bin/bash

./generate.rb -p tizen-nacl -c Debug --local
./build.rb -b build/tizen-nacl/Debug
tizen install -n /Users/kevinscroggins/youidev/Projects/RNTizenRemoteLoggerExample/youi/build/tizen-nacl/Debug/RNTizenRemoteLoggerExample-Debug.wgt
tizen run -p XjRxG1K3Bp.rntizenremoteloggerexample
