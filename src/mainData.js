export const mainData = [
    {   
        id:'1',
        customerName: 'Sandesh',
        number: 1234567890,
        isLoggedIn: false,
        email:'',
        address: [],
        orders: [
            {
                orderId: 1,
                orderData: '25th May 2023 5:00PM',
                bag: [ {
                    itemName: "Pumpkin Green \ Kashi Fal",
                    unit: 'per kg',
                    price: "₹45",
                    count: 1,
                    isVisible: false,
                    img:"https://cdn3.mydukaan.io/app/image/200x200/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/6b0124d2-fea6-45b5-8d5f-ad27a427eb0a/1664546507142.jpeg"
                } ],
                orderTotal: 1000,
                paymentMethod: 'COD',
                orderStatus:'',
                
            }
        ]
    }
]