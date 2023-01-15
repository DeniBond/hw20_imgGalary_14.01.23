(() => {
    const imgDB = [
        'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5757WhZcn5nQoARfEbIGxJ5OV3fBg71TXtwwGZyj&s',
        'https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg',
        'https://ic.pics.livejournal.com/olegmakarenko.ru/12791732/2404737/2404737_original.jpg',
        'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png',
        'https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-37-1024x576.jpg',
        'https://www.clipartmax.com/png/middle/475-4750172_recent-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D1%81%D1%80%D0%B8%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D1%80%D0%BE%D0%B3.png'
    ];

    const imgContent = document.querySelector('#imgContent')
    const imgList = document.querySelector('.img_list')
    imgDB.forEach((value) => {
        const newElement = document.createElement('img')
        newElement.style.width = "80px"
        newElement.style.height = "80px"
        newElement.style.margin = "4px"
        newElement.setAttribute('src', value)
        imgList.appendChild(newElement)
    })

    imgList.addEventListener('click', e=>{
        if (e.target.getAttribute('src')){
            imgContent.setAttribute('src', e.target.getAttribute('src'))
            imgContent.style.width = "40vw"
        }
    })


    const render = () => {
        const modalZoneDiv = document.getElementById('alertZone');
        const modalAlertDiv = document.getElementById('alertContent');

        document.querySelector('.img_list').addEventListener('click', () => {
            modalZoneDiv.classList.remove('hide');
            modalAlertDiv.classList.remove('hide');
        });

        modalZoneDiv.addEventListener('click', () => {
            modalZoneDiv.classList.add('hide');
            modalAlertDiv.classList.add('hide');
        });
    }
    render()
})()