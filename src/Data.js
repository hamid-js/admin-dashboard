let xAxisData = [
    {
        "name": 'پایان سال',
        "فروش": 50_000
    },
    {
        "name": 'اسفند',
        "فروش": 120_000
    },
    {
        "name": 'بهمن',
        "فروش": 99_000
    },
    {
        "name": 'دی',
        "فروش": 12_090
    },
    {
        "name": 'آذر',
        "فروش": 99_000
    },
    {
        "name": 'آبان',
        "فروش": 54_000
    },
    {
        "name": 'مهر',
        "فروش": 85_000
    },
    {
        "name": 'شهریور',
        "فروش": 34_000
    },
    {
        "name": 'مرداد',
        "فروش": 18_598
    },
    {
        "name": 'تیر',
        "فروش": 30_000
    },
    {
        "name": 'خرداد',
        "فروش": 73_078
    },
    {
        "name": 'اردی',
        "فروش": 36_900
    },
    {
        "name": 'فروردین',
        "فروش": 97_000
    },
]



const newMember =[
    {
        id:1 , 
        userName: "Hamid",
        title: "js Developer",
        img: "/img/face/face (6).jpg"
    },
    {
        id:2 , 
        userName: "ali",
        title: "Hacker",
        img: "/img/face/face (8).jpg"
    },
    {
        id:3 , 
        userName: "saeid",
        title: "web developer",
        img: "/img/face/face (5).jpg"
    },
    {
        id:4 , 
        userName: "pari",
        title: "translator",
        img: "/img/face/face (30).jpg"
    },
    {
        id:1 , 
        userName: "sara",
        title: "Androad dev",
        img: "/img/face/face (27).jpg"
    },
]

const transActions = [ 
    {
        id:1 ,
        customer: "Hamid",
        date: "25 دی 1378",
        amount:112 ,
        status:"Approved",
        image: "/img/face/face (3).jpg"
    },
    {
        id:2 ,
        customer: "Mahdi",
        date: "24 خرداد 1380",
        amount:35 ,
        status:"Pending",
        image: "/img/face/face (1).jpg"
    },
    {
        id:3 ,
        customer: "tala",
        date: "01 فروردین 1376",
        amount:96 ,
        status:"Declined",
        image: "/img/face/face (23).jpg"
    },
    {
        id:4 ,
        customer: "nazi",
        date: "25 بهمن 1382",
        amount:100 ,
        status:"Approved",
        image: "/img/face/face (18).jpg"
    },
]


let userRows =[
    {
        id:1,
        userName:"hamid",
        avatar:"/img/face/face (3).jpg",
        status:"active",
        transActions: "$259.5" ,
        email: "Hamid@gmail.com"
    },
    {
        id:2,
        userName:"sanaz",
        avatar:"/img/face/face (12).jpg",
        status:"active",
        transActions: "$95" ,
        email: "Hamid@gmail.com"
    },
    {
        id:3,
        userName:"amir",
        avatar:"/img/face/face (4).jpg",
        status:"non-active",
        transActions: "$150" ,
        email: "Hamid@gmail.com"
    },
    {
        id:4,
        userName:"mahsa",
        avatar:"/img/face/face (14).jpg",
        status:"active",
        transActions: "$198" ,
        email: "Hamid@gmail.com"
    },
] 


let products =[
    {
        id:1 ,
        title: "iPhone 13",
        avatar:"/img/products/iPhone 13 CH.jpg",
        price: 190 ,

    },
    {
        id:2 ,
        title: "12T Pro",
        avatar:"/img/products/12T Pro.jpg",
        price: 154 ,

    },
    {
        id:3 ,
        title: "Galaxy A33",
        avatar:"/img/products/Galaxy A33.jpg",
        price: 90 ,

    },
    {
        id:4 ,
        title: "Galaxy Z Fold4",
        avatar:"/img/products/Galaxy Z Fold4.jpg",
        price: 200 ,

    },
    {
        id:5 ,
        title: "Poco X4",
        avatar:"/img/products/Poco X4.jpg",
        price: 102 ,

    },
]
const productsData = [
    {
        name: 'Jan',
        sales: 4000,
    },
    {
        name: 'Feb',
        sales: 3000,
    },
    {
        name: 'Mar',
        sales: 5000,
    },
]

export {xAxisData ,newMember,transActions,userRows ,products , productsData}