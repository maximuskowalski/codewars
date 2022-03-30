#!/bin/bash

export PATH=$PATH:/usr/local/bin
gstatus=`git status --porcelain`

if [ ${#gstatus} -ne 0 ]
then

    git add --all
    sleep 10
    git commit -m "auto sync: $gstatus"
    git pull --rebase
    sleep 10
    git push

fi
