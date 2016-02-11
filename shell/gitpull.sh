#!/bin/bash

# 每分钟执行git pull
# @author xiaoda

while true
do
    git pull
    sleep 60
done