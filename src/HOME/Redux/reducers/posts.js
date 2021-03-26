const inital = {
    college: [

        {
            "_id": "605e4814a5db665808c84890",
            "college_id": "KYC001",
            "name": "Miranda House",
            "logo": "https://www.mirandahouse.ac.in/images/photo_band1.jpg"
        },
        {
            "_id": "603829c06464b130e0109147",
            "name": "Bhagini Nivedita College",
            "logo": "https://www.sundayguardianlive.com/wp-content/uploads/2018/12/p2-42.jpg",
            "college_id": "KYC002"
        },
        {
            "_id": "603829c06464b130e0109148",
            "name": "Bharati College",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFMqNYoslQuLGKG-ECocVqryzJmuMjKwSaA&usqp=CAU",
            "college_id": "KYC003"
        },
        {
            "_id": "603829c06464b130e0109149",
            "name": "Bhaskaracharya College of Applied Sciences",
            "logo": "https://imgk.timesnownews.com/1564639202-SRCC_DU.jpg?tr=w-560,h-292,fo-top",
            "college_id": "KYC004"
        },
        {
            "_id": "603829c06464b130e010914a",
            "name": "Bhim Rao Ambedkar College",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQss3yCAzGk3V4nhasZoTtnFLetlxOqAyWDuw&usqp=CAU",
            "college_id": "KYC005"
        },
        {
            "_id": "603829c06464b130e010914b",
            "name": "Chacha Nehru Bal Chikitsalaya",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC006"
        },
        {
            "_id": "603829c06464b130e010914c",
            "name": "College of Art",
            "logo": "https://lh3.googleusercontent.com/wx4s6w3KxOAdgQLY7_Fca0S3pB5URgu2OmyDGoxVSWzQ_YY1ypD1B-FDqlTu9Vb_aG_JQ93NNqQr4R9t5034apUBUXe3H7yzu5ppIkD6ybEGfjG0fkdIwoBboLbQIS2lqXunrYUvnw=w2400",
            "college_id": "KYC007"
        },
        {
            "_id": "603829c06464b130e010914d",
            "name": "College of Nursing at Army Hospital (R&R)",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC008"
        },
        {
            "_id": "603829c06464b130e010914e",
            "name": "College of Vocational Studies",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC009"
        },
        {
            "_id": "603829c06464b130e010914f",
            "name": "Daulat Ram College",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC010"
        },
        {
            "_id": "603829c06464b130e0109150",
            "name": "Deen Dayal Upadhyaya College",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC011"
        },
        {
            "_id": "603829c06464b130e0109151",
            "name": "Delhi College of Arts & Commerce",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC012"
        },
        {
            "_id": "603829c06464b130e0109152",
            "name": "Delhi Institute of Pharmaceutical Sciences and Research",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC013"
        },
        {
            "_id": "603829c06464b130e0109153",
            "name": "Deshbandhu College(Morning)",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC014"
        },
        {
            "_id": "603829c06464b130e0109154",
            "name": "Durga Bai Deshmukh College of Special Edu.(VI)",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC015"
        },
        {
            "_id": "603829c06464b130e0109155",
            "name": "Dyal Singh College",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC016"
        },
        {
            "_id": "603829c06464b130e0109156",
            "name": "Dyal Singh College (Evening)",
            "logo": "https://lh3.googleusercontent.com/hHxLq2olQnSxMzXQbTAxgmAydN9l65WHQMYG6BmYkWpLOLGHytysdxWVoP8Ry7oLCMWW7S0iboXN-s9IVEJ0tjwcAc7MegtnKCGpk0aQ-GJ2WwMUvBOEqfQdE1P0_A5vVDVNS6J6ig=w2400",
            "college_id": "KYC017"
        }
    ],
    overview: [],
    cutoff: [],
    fees: [],
    course: []
}


export default (state = inital, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return {
                ...state,
                college: [...state.college, action.payload]

            }
        case 'OVERVIEW':
            return {
                ...state,
                overview: action.payload

            }

        case 'COURSE':
            return {
                ...state,
                course: action.payload

            }
        case 'FEES':
            return {
                ...state,
                fees: action.payload

            }
        case 'CUTOFF':
            return {
                ...state,
                cutoff: action.payload

            }

        default:
            return state;
    }
}



