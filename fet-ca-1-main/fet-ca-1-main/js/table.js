data = [
    {"id":"1", "Icon":"<i class='bi bi-balloon-heart-fill'></i>", "Description":"This is a balloon heart icon", "Info":"The image was created by Carlos Ramirez","Image":"<img src='https://pbs.twimg.com/profile_images/2343089286/ytzkekqtjns3bqnazs7s_400x400.jpeg' width='45' height='45' target='_blank' alt='image of character wearing a mischievous smile, used to symbolise internet trolls'/>"},
    {"id":"2", "Icon":"<i class='bi bi-calendar-month'></i>", "Description":"This is calendar month icon", "Info":"The image is a character from an anime 'Naruto'","Image":"<img src='http://cdn.shopify.com/s/files/1/0405/1927/0554/products/Naruto-Itachi-Uchiha-Poster_1200x1200.jpg?v=1657255019' width='40' height='45' target='_blank' alt='Itachi Uchiha standing with full moon in the background and red sky'/>"},
    {"id":"3", "Icon":"<i class='bi bi-boombox-fill'></i>", "Description":"This is a boombox icon", "Info":"A JavaScript memes","Image":"<img src='https://s3.memeshappen.com/memes/javascript-javascript-meme-34556.jpg' width='40' height='45' target='_blank' alt='a cartoon character looking skeptical towards the tought of Javascript language'/>"},
    {"id":"4", "Icon":"<i class='bi bi-cloud-drizzle-fill'></i>", "Description":"This is cloud drizzle icon", "Info":"The image of an umbrella","Image":"<img src='https://imgcp.aacdn.jp/img-a/1720/auto/global-aaj-front/article/2018/06/5b175af9237fd_5b174f251c415_2090422605.jpg' width='45' height='45' target='_blank' alt='an image of a black umbrella in the rain laying on the wooden floor'/>"},
    {"id":"5", "Icon":"<i class='bi bi-controller'></i>", "Description":"This is the controller icon", "Info":"The image cover of a game","Image":"<img src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_BlazingBeaks_image1600w.jpg' width='45' height='45' target='_blank' alt='an illustration of a game cover with a duck and a platypus ready for some action'/>"}
]

function populateTable(data){
    let table = document.getElementById("personalTable");

    for (let i = 0; i < data.length; i++){
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = data[i].id.toString();
        cell2.innerHTML = data[i].Icon.toString();
        cell3.innerHTML = data[i].Description.toString();
        cell4.innerHTML = data[i].Info.toString();
        cell5.innerHTML = data[i].Image.toString();
    }
}

populateTable(data);

$("td img").click(function(){
    window.open($(this).attr("src"), "window", "settings");
    return false;
});


$(function (){
    $("tr:odd").hover(
        function() {
            $(this).css("color", "violet");
        },
        function(){
            $(this).css("color", "black");
        }
    )
});
