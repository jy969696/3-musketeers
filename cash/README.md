# cash


# content
- Introduction(##Introduction)
- [Use](##Use)
    - [Setup](###Setup)
    - [Fuction](###Fuction:####Run,####Modify)


##Introduction
Cash is a currency conversion system. 
you can calculate the exchange rate 
between the  'from' currency and the 
'to' currency of other countries.


##Use

###Setup

First ,clone the project at
`https://github.com/jy969696/3-musketeers`

Second,open your cmd terminal,
enter cash directory by using commond: 
>cd /path/to/workspace/3-musketeers/cash

Third,install all the components you need 
in package.json by using commond: 
>npm i
++Note++
This step allows you to put the needed
components into the node_modules directory.

###Fuction

####Run

Finally,run the tool by using commond:  
>node bin/index.js
++Note++
You will see the exchange rate of the US dollar 
against Euro , Pound ,Japenese Yen per USD.

####Modify
You can now change the country's currency in 'constants.js'. 
It accesses exchange rates in real time from the API:
'https://api.exchangeratesapi.io/latest'.
In the array list 'DEFAULT_TO_CURRENCIES', 
the first element is 'reference country', 
the last three elements are 'query countries', 
you can change other countries' currencies to what you want.