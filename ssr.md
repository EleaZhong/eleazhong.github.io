
# Installing SSR Cheatsheet

made by Dazhi

## Preface

Just a few codes for installing an SSR script in a VULTR server, will not include details about buying a server, as these are just code snippets from [another person's article](https://github.com/Alvin9999/new-pac/wiki/%E8%87%AA%E5%BB%BAss%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%95%99%E7%A8%8B) for my own reference. Please feel free to go there and read the whole thing. 

## Installation

Basic installation of an SSR script

Before installing, use ssh to connect:

    ssh root@[server ip]

eg.

    ssh root@112.245.1.98

Script installer

    yum -y install wget

    wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssr.sh && chmod +x ssr.sh && bash ssr.sh

Google BBR

I guess it is used to boost speed

    yum -y install wget

    wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh

    chmod +x bbr.sh

    ./bbr.sh

sometimes built-in firewalls affect the stability

disable it.

    systemctl stop firewalld.service

    systemctl disable firewalld.service

## some more websites that'll help

if you're interested in bypassing China's firewall check out [this book](https://darrenliuwei.com/ebooks/gfw/)

basically thats it
