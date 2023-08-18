var mapContainer = document.getElementById('map'), // 지도를 표시할 div
mapOption = {
    center: new kakao.maps.LatLng(35.871389, 128.601389), // 지도의 중심좌표
    level: 1 // 지도의 확대 레벨
};

// 지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

function searchAddrFromCoords(coords, callback) {
// 좌표로 행정동 주소 정보를 요청합니다
geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
}

function searchDetailAddrFromCoords(coords, callback) {
// 좌표로 법정동 상세 주소 정보를 요청합니다
geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}

var printAddress = function(result, status){
if (status === kakao.maps.services.Status.OK) {

    console.log('지역 명칭 : ' + result[0].address_name);
    console.log('행정구역 코드 : ' + result[0].code);


    document.getElementById("data").innerHTML += result[0].x+","+result[0].y+","+result[0].address_name+"<br>";
}
};

// response = "";

// const fetchData = async() => {
// response = await fetch('../js/posData.json');
// data = await response.json();

// for (let i=0; i<10;i++){

// let currentLat = data[i].y;
// let currentLng = data[i].x;

// var circle = new kakao.maps.Circle({
//     center : new kakao.maps.Circle(currentLat,currentLng),
//     radius: 100, // 미터 단위의 원의 반지름입니다
//     strokeWeight: 5, // 선의 두께입니다
//     strokeColor: '#FF0000', // 선의 색깔입니다
//     strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
//     strokeStyle: 'dashed', // 선의 스타일 입니다
//     fillColor: '#FF0000', // 채우기 색깔입니다
//     fillOpacity: 1.0  // 채우기 불투명도 입니다
// });

// circle.setMap(map);

// var latlng = new kakao.maps.LatLng(currentLat, currentLng);
//     searchAddrFromCoords(latlng,printAddress);
// }
// }