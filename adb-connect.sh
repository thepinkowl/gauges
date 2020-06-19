#!/bin/bash
## ./adb-connect.sh PHONE_IP
adb tcpip 5555
adb connect $1