
myobj = [
    {
        "LAT": "22.54905556",
        "System_ID": "10.225.119.134",
        "Name": "BGL_BLD_928_1AC_B_CASR920R801",
        "LONG": "82.74097222"
    },
     {
        "LAT": "28.70272222",
        "System_ID": {"FN":"My","LN":"name"},
        "Name": "NDL_PKP_901_2AC_ASASTXXR016",
        "LONG": "77.14447222"
    },
    {
        "LAT": "28.53503",
        "System_ID": ["MY","This"],
        "Name": "NDL_PAV_901_1AC_ASASTXXR440",
        "LONG": "77.22192"
    }
]


console.log(myobj[1].System_ID.FN)