import {Box} from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Chart from "react-apexcharts";

const options = {
    chart: {
        type: 'line',
        zoom: {
            // enabled: false
        },
        background: 'transparent',
        animations: {
            enabled: false
        }
    },
    //
    xaxis: {
        type: 'datetime',
        labels: {
            format: 'yyyy-MM-dd'
        }
    },
    yaxis: {
        min: 1200
    },
    stroke: {
        curve: 'straight',
        width: 2
    },
    fill: {
        opacity: 1
    },
    markers: {
        size: 2,
    },
    theme: {
        mode:'dark'
    },
    annotations: {
        yaxis: [
            {
                y: 0,
                y2: 1200,
                fillColor: '#edede9',
            },
            {
                y: 1200,
                y2: 1400,
                fillColor: '#a7c957',
            },
            {
                y: 1400,
                y2: 1600,
                fillColor: '#ade8f4',
            },
            {
                y: 1600,
                y2: 1900,
                fillColor: '#023e8a',
            },
            {
                y: 1900,
                y2: 2100,
                fillColor: '#5f0f40'
            },
            {
                y: 2100,
                y2: 2300,
                fillColor: '#fb8b24'
            },
            {
                y: 2300,
                y2: 2400,
                fillColor: '#e36414'
            },
            {
                y: 2400,
                y2: 2600,
                fillColor: '#b6465f'
            },
            {
                y: 2600,
                y2: 3000,
                fillColor: '#890620'
            },
            {
                y: 3000,
                y2: 10000,
                fillColor: '#2c0703'
            },
        ]
    },
    legend: {
        show: true
    },
    colors: ['#FF4560', '#00E396', '#008FFB']
};

const series = [
    {
        'name': 'Serendipity__',
        'data': [{'x': '2021-01-05', 'y': 522}, {'x': '2021-01-08', 'y': 907}, {
            'x': '2021-01-14',
            'y': 1279
        }, {'x': '2021-01-19', 'y': 1464}, {'x': '2021-01-28', 'y': 1556}, {
            'x': '2021-01-29',
            'y': 1618
        }, {'x': '2021-02-05', 'y': 1586}, {'x': '2021-02-07', 'y': 1637}, {
            'x': '2021-02-12',
            'y': 1656
        }, {'x': '2021-02-15', 'y': 1511}, {'x': '2021-02-16', 'y': 1484}, {
            'x': '2021-02-18',
            'y': 1532
        }, {'x': '2021-02-28', 'y': 1588}, {'x': '2021-03-02', 'y': 1528}, {
            'x': '2021-03-18',
            'y': 1436
        }, {'x': '2021-04-03', 'y': 1510}, {'x': '2021-04-10', 'y': 1621}, {
            'x': '2021-09-08',
            'y': 1654
        }, {'x': '2021-09-12', 'y': 1649}, {'x': '2021-10-03', 'y': 1524}, {
            'x': '2021-10-08',
            'y': 1566
        }, {'x': '2021-10-10', 'y': 1516}, {'x': '2021-10-13', 'y': 1623}, {
            'x': '2021-10-30',
            'y': 1668
        }, {'x': '2021-12-12', 'y': 1598}, {'x': '2021-12-14', 'y': 1697}, {
            'x': '2021-12-16',
            'y': 1656
        }, {'x': '2021-12-18', 'y': 1621}, {'x': '2021-12-24', 'y': 1619}, {
            'x': '2021-12-27',
            'y': 1685
        }, {'x': '2021-12-28', 'y': 1605}, {'x': '2021-12-29', 'y': 1569}, {
            'x': '2022-01-03',
            'y': 1691
        }, {'x': '2022-01-12', 'y': 1684}, {'x': '2022-01-22', 'y': 1688}, {
            'x': '2022-01-27',
            'y': 1805
        }, {'x': '2022-01-30', 'y': 1725}, {'x': '2022-01-31', 'y': 1744}, {
            'x': '2022-02-06',
            'y': 1710
        }, {'x': '2022-02-12', 'y': 1754}, {'x': '2022-02-14', 'y': 1738}, {
            'x': '2022-02-22',
            'y': 1748
        }, {'x': '2022-03-10', 'y': 1817}, {'x': '2022-03-11', 'y': 1830}, {
            'x': '2022-03-22',
            'y': 1887
        }, {'x': '2022-03-24', 'y': 1842}, {'x': '2022-03-27', 'y': 1809}, {
            'x': '2022-04-08',
            'y': 1800
        }, {'x': '2022-04-23', 'y': 1821}, {'x': '2022-05-19', 'y': 1846}, {
            'x': '2022-05-22',
            'y': 1776
        }, {'x': '2022-05-23', 'y': 1731}, {'x': '2022-05-31', 'y': 1776}, {
            'x': '2022-06-12',
            'y': 1921
        }, {'x': '2022-07-31', 'y': 1982}, {'x': '2022-08-06', 'y': 1870}, {
            'x': '2022-08-13',
            'y': 1874
        }, {'x': '2022-08-16', 'y': 1869}, {'x': '2022-08-20', 'y': 1973}, {
            'x': '2022-08-27',
            'y': 1881
        }, {'x': '2022-09-08', 'y': 1864}, {'x': '2022-09-19', 'y': 1812}, {
            'x': '2022-09-23',
            'y': 1920
        }, {'x': '2022-09-25', 'y': 1848}, {'x': '2022-09-29', 'y': 1911}, {
            'x': '2022-09-30',
            'y': 1917
        }, {'x': '2022-10-02', 'y': 1923}, {'x': '2022-10-10', 'y': 1903}, {
            'x': '2022-10-15',
            'y': 2001
        }, {'x': '2022-10-17', 'y': 1910}, {'x': '2022-10-20', 'y': 1882}, {
            'x': '2022-10-23',
            'y': 1896
        }, {'x': '2022-10-23', 'y': 1909}, {'x': '2022-11-04', 'y': 1926}, {
            'x': '2022-11-06',
            'y': 1982
        }, {'x': '2022-11-20', 'y': 2056}, {'x': '2022-11-25', 'y': 2058}, {
            'x': '2022-12-11',
            'y': 2054
        }, {'x': '2022-12-12', 'y': 1965}, {'x': '2022-12-15', 'y': 1958}, {
            'x': '2022-12-16',
            'y': 1829
        }, {'x': '2022-12-17', 'y': 1841}, {'x': '2022-12-19', 'y': 1837}, {
            'x': '2022-12-30',
            'y': 1797
        }, {'x': '2023-01-03', 'y': 1829}, {'x': '2023-01-08', 'y': 2000}, {
            'x': '2023-01-10',
            'y': 2056
        }, {'x': '2023-01-21', 'y': 2102}, {'x': '2023-03-31', 'y': 2095}, {
            'x': '2023-04-02',
            'y': 2137
        }, {'x': '2023-07-11', 'y': 2053}, {'x': '2023-07-16', 'y': 2122}, {
            'x': '2023-07-23',
            'y': 2258
        }, {'x': '2023-08-30', 'y': 2063}, {'x': '2023-08-31', 'y': 2082}, {
            'x': '2023-09-11',
            'y': 2068
        }, {'x': '2023-09-18', 'y': 2081}, {'x': '2023-09-24', 'y': 2089}, {
            'x': '2023-09-30',
            'y': 2009
        }, {'x': '2023-10-08', 'y': 1923}, {'x': '2023-10-09', 'y': 2094}, {
            'x': '2023-10-22',
            'y': 2098
        }, {'x': '2023-10-28', 'y': 2161}, {'x': '2023-12-23', 'y': 2159}, {
            'x': '2023-12-30',
            'y': 1986
        }, {'x': '2024-01-06', 'y': 1978}, {'x': '2024-01-13', 'y': 1950}, {
            'x': '2024-01-18',
            'y': 2004
        }, {'x': '2024-01-27', 'y': 1961}, {'x': '2024-01-30', 'y': 1966}, {
            'x': '2024-02-11',
            'y': 2049
        }, {'x': '2024-02-15', 'y': 2040}, {'x': '2024-02-17', 'y': 2031}, {
            'x': '2024-02-23',
            'y': 2040
        }, {'x': '2024-02-29', 'y': 2022}, {'x': '2024-03-05', 'y': 2118}, {
            'x': '2024-03-16',
            'y': 2039
        }, {'x': '2024-03-22', 'y': 2107}, {'x': '2024-03-30', 'y': 2142}, {
            'x': '2024-04-06',
            'y': 2057
        }, {'x': '2024-04-12', 'y': 2152}, {'x': '2024-04-13', 'y': 2210}, {
            'x': '2024-04-27',
            'y': 2158
        }, {'x': '2024-06-09', 'y': 2137}, {'x': '2024-06-30', 'y': 2111}, {
            'x': '2024-07-18',
            'y': 2072
        }, {'x': '2024-07-20', 'y': 2124}, {'x': '2024-08-11', 'y': 2228}, {'x': '2024-08-30', 'y': 2268}]
    }
    ,
    {
        'name': 'plast',
        'data': [{'x': '2018-02-24', 'y': 1494}, {'x': '2018-02-25', 'y': 1361}, {
            'x': '2018-03-09',
            'y': 1365
        }, {'x': '2018-03-10', 'y': 1411}, {'x': '2018-03-23', 'y': 1407}, {
            'x': '2018-03-24',
            'y': 1371
        }, {'x': '2018-06-01', 'y': 1370}, {'x': '2018-06-16', 'y': 1481}, {
            'x': '2018-07-13',
            'y': 1626
        }, {'x': '2018-09-07', 'y': 1667}, {'x': '2018-12-23', 'y': 1669}, {
            'x': '2019-01-26',
            'y': 1691
        }, {'x': '2019-07-05', 'y': 1617}, {'x': '2019-12-14', 'y': 1682}, {
            'x': '2019-12-21',
            'y': 1843
        }, {'x': '2019-12-24', 'y': 1835}, {'x': '2020-04-12', 'y': 1823}, {
            'x': '2020-04-15',
            'y': 1840
        }, {'x': '2020-04-23', 'y': 1886}, {'x': '2020-04-26', 'y': 1821}, {
            'x': '2020-05-01',
            'y': 1957
        }, {'x': '2020-05-12', 'y': 2014}, {'x': '2020-05-16', 'y': 2089}, {
            'x': '2020-05-17',
            'y': 2127
        }, {'x': '2020-06-04', 'y': 2065}, {'x': '2020-06-11', 'y': 2078}, {
            'x': '2020-07-01',
            'y': 1957
        }, {'x': '2020-08-09', 'y': 2055}, {'x': '2020-08-21', 'y': 2208}, {
            'x': '2020-11-15',
            'y': 2148
        }, {'x': '2022-11-20', 'y': 2107}, {'x': '2022-11-26', 'y': 2222}, {
            'x': '2022-12-17',
            'y': 2238
        }, {'x': '2022-12-30', 'y': 2263}, {'x': '2023-01-03', 'y': 2243}, {
            'x': '2023-01-15',
            'y': 2280
        }, {'x': '2023-01-29', 'y': 2269}, {'x': '2023-02-05', 'y': 2206}, {
            'x': '2023-02-27',
            'y': 2074
        }, {'x': '2023-03-29', 'y': 1993}, {'x': '2023-03-31', 'y': 2087}, {
            'x': '2023-04-02',
            'y': 2074
        }, {'x': '2023-04-20', 'y': 2065}, {'x': '2023-05-08', 'y': 2029}, {
            'x': '2023-05-14',
            'y': 1990
        }, {'x': '2023-06-29', 'y': 2043}, {'x': '2023-07-06', 'y': 2074}, {
            'x': '2023-07-11',
            'y': 2249
        }, {'x': '2023-08-26', 'y': 2301}, {'x': '2023-09-10', 'y': 2227}, {
            'x': '2023-12-23',
            'y': 2292
        }, {'x': '2023-12-30', 'y': 2156}, {'x': '2024-01-06', 'y': 1963}, {
            'x': '2024-01-27',
            'y': 2002
        }, {'x': '2024-02-17', 'y': 2078}, {'x': '2024-02-29', 'y': 2118}, {
            'x': '2024-03-16',
            'y': 2138
        }, {'x': '2024-03-30', 'y': 2193}, {'x': '2024-04-06', 'y': 2329}, {
            'x': '2024-04-27',
            'y': 2394
        }, {'x': '2024-04-30', 'y': 2406}]
    }, {
        'name': 'JYJin',
        'data': [{'x': '2020-06-23', 'y': 459}, {'x': '2020-06-28', 'y': 789}, {
            'x': '2020-07-19',
            'y': 944
        }, {'x': '2020-07-21', 'y': 1073}, {'x': '2020-07-24', 'y': 1076}, {
            'x': '2020-07-30',
            'y': 1227
        }, {'x': '2020-08-05', 'y': 1299}, {'x': '2020-08-07', 'y': 1430}, {
            'x': '2020-08-09',
            'y': 1651
        }, {'x': '2020-08-12', 'y': 1621}, {'x': '2020-08-14', 'y': 1518}, {
            'x': '2020-08-21',
            'y': 1549
        }, {'x': '2020-08-25', 'y': 1494}, {'x': '2020-09-04', 'y': 1578}, {
            'x': '2020-09-06',
            'y': 1626
        }, {'x': '2020-09-08', 'y': 1466}, {'x': '2020-09-12', 'y': 1543}, {
            'x': '2020-09-19',
            'y': 1543
        }, {'x': '2020-09-24', 'y': 1484}, {'x': '2020-09-27', 'y': 1663}, {
            'x': '2020-09-30',
            'y': 1698
        }, {'x': '2020-10-18', 'y': 1891}, {'x': '2020-10-24', 'y': 1888}, {
            'x': '2020-10-25',
            'y': 2001
        }, {'x': '2020-10-27', 'y': 2013}, {'x': '2020-11-01', 'y': 1987}, {
            'x': '2020-11-02',
            'y': 1914
        }, {'x': '2020-11-19', 'y': 1785}, {'x': '2020-11-21', 'y': 1734}, {
            'x': '2020-11-29',
            'y': 1778
        }, {'x': '2020-11-30', 'y': 1723}, {'x': '2020-12-04', 'y': 1745}, {
            'x': '2020-12-06',
            'y': 1673
        }, {'x': '2020-12-11', 'y': 1812}, {'x': '2020-12-17', 'y': 1838}, {
            'x': '2020-12-19',
            'y': 1830
        }, {'x': '2020-12-20', 'y': 1978}, {'x': '2020-12-28', 'y': 1882}, {
            'x': '2020-12-30',
            'y': 1848
        }, {'x': '2021-01-05', 'y': 1861}, {'x': '2021-01-08', 'y': 1916}, {
            'x': '2021-01-14',
            'y': 1977
        }, {'x': '2021-01-19', 'y': 2088}, {'x': '2021-01-28', 'y': 2087}, {
            'x': '2021-02-12',
            'y': 2078
        }, {'x': '2022-07-04', 'y': 2066}, {'x': '2022-07-08', 'y': 1969}, {
            'x': '2022-07-16',
            'y': 1934
        }, {'x': '2022-07-18', 'y': 1895}, {'x': '2022-07-24', 'y': 1969}, {
            'x': '2022-07-31',
            'y': 1975
        }, {'x': '2022-08-04', 'y': 2000}, {'x': '2022-08-06', 'y': 2088}, {
            'x': '2022-08-13',
            'y': 2040
        }, {'x': '2022-08-16', 'y': 2088}, {'x': '2022-08-27', 'y': 1998}, {
            'x': '2022-09-08',
            'y': 1980
        }, {'x': '2022-09-19', 'y': 2004}, {'x': '2022-09-23', 'y': 2071}, {
            'x': '2022-09-25',
            'y': 2216
        }, {'x': '2022-09-30', 'y': 2206}, {'x': '2022-10-07', 'y': 2146}, {
            'x': '2022-10-15',
            'y': 2072
        }, {'x': '2022-10-17', 'y': 1971}, {'x': '2022-10-20', 'y': 2004}, {
            'x': '2022-10-23',
            'y': 2045
        }, {'x': '2022-10-23', 'y': 1971}, {'x': '2022-11-04', 'y': 2084}, {
            'x': '2022-11-06',
            'y': 2091
        }, {'x': '2022-11-12', 'y': 2056}, {'x': '2022-11-20', 'y': 2089}, {
            'x': '2022-11-25',
            'y': 2129
        }, {'x': '2022-11-26', 'y': 2141}, {'x': '2022-12-17', 'y': 2174}, {
            'x': '2022-12-30',
            'y': 2163
        }, {'x': '2023-01-03', 'y': 2236}, {'x': '2023-01-15', 'y': 2108}, {
            'x': '2023-01-29',
            'y': 2054
        }, {'x': '2023-02-05', 'y': 2063}, {'x': '2023-02-09', 'y': 2059}, {
            'x': '2023-02-12',
            'y': 2069
        }, {'x': '2023-02-16', 'y': 2040}, {'x': '2023-02-28', 'y': 1898}, {
            'x': '2023-03-12',
            'y': 2001
        }, {'x': '2023-03-23', 'y': 1945}, {'x': '2023-03-26', 'y': 2111}, {
            'x': '2023-03-31',
            'y': 2070
        }, {'x': '2023-04-02', 'y': 2117}, {'x': '2023-04-29', 'y': 2122}, {
            'x': '2023-05-14',
            'y': 2156
        }, {'x': '2023-05-28', 'y': 2102}, {'x': '2023-07-11', 'y': 2152}, {
            'x': '2023-08-30',
            'y': 2123
        }, {'x': '2023-09-18', 'y': 2071}, {'x': '2023-09-25', 'y': 2121}, {
            'x': '2023-09-30',
            'y': 2181
        }, {'x': '2023-10-08', 'y': 2189}, {'x': '2023-10-28', 'y': 2223}, {
            'x': '2023-11-07',
            'y': 2160
        }, {'x': '2023-12-23', 'y': 2239}, {'x': '2023-12-30', 'y': 2203}, {
            'x': '2024-01-06',
            'y': 2222
        }, {'x': '2024-01-27', 'y': 2301}, {'x': '2024-02-17', 'y': 2300}, {
            'x': '2024-02-29',
            'y': 2308
        }, {'x': '2024-03-16', 'y': 2315}, {'x': '2024-03-30', 'y': 2291}, {
            'x': '2024-04-06',
            'y': 2355
        }, {'x': '2024-04-27', 'y': 2430}, {'x': '2024-04-30', 'y': 2385}, {
            'x': '2024-05-25',
            'y': 2304
        }, {'x': '2024-06-09', 'y': 2283}, {'x': '2024-06-30', 'y': 2314}, {
            'x': '2024-07-18',
            'y': 2353
        }, {'x': '2024-07-28', 'y': 2235}, {'x': '2024-08-11', 'y': 2297}, {'x': '2024-08-30', 'y': 2272}]
    },
];


const RatingChartComponent = () => {
    return (

            <Chart options={options} series={series} type="line" height={350} width={800}/>

    );
};

export default RatingChartComponent;