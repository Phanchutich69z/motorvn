function showDetail(bike){

let detail = document.getElementById("detailBox");

if(bike === "h2r"){

detail.innerHTML = `

<h2>Kawasaki Ninja H2R</h2>

<p><b>Loại xe:</b> HyperSport</p>

<p><b>Mã lực:</b> 310 HP</p>

<p><b>Vận tốc tối đa:</b> 400 km/h</p>

<p><b>Động cơ:</b> 998cc Supercharged</p>

<p>
Kawasaki Ninja H2R là một trong những siêu moto mạnh nhất thế giới,
được thiết kế dành riêng cho đường đua với khả năng tăng tốc cực khủng.
</p>

`;

}

else if(bike === "mtt420rr"){

detail.innerHTML = `

<h2>MTT 420RR Turbine</h2>

<p><b>Loại xe:</b> Turbine Superbike</p>

<p><b>Mã lực:</b> 420 HP</p>

<p><b>Vận tốc tối đa:</b> 439 km/h</p>

<p><b>Động cơ:</b> Rolls Royce Turbine</p>

<p>
MTT 420RR sử dụng động cơ turbine cực hiếm,
mang lại sức mạnh vượt xa superbike thông thường.
</p>

`;

}

else if(bike === "tomahawk"){

detail.innerHTML = `

<h2>Dodge Tomahawk V10</h2>

<p><b>Loại xe:</b> Concept Superbike</p>

<p><b>Mã lực:</b> 500 HP</p>

<p><b>Vận tốc tối đa:</b> 560 km/h</p>

<p><b>Động cơ:</b> V10 8.3L</p>

<p>
Dodge Tomahawk là chiếc moto ý tưởng sở hữu động cơ từ Dodge Viper,
mang sức mạnh cực kỳ khủng khiếp.
</p>

`;

}

else if(bike === "panigale"){

detail.innerHTML = `

<h2>Ducati Panigale V4 S</h2>

<p><b>Loại xe:</b> Italian Superbike</p>

<p><b>Mã lực:</b> 240 HP</p>

<p><b>Vận tốc tối đa:</b> 320 km/h</p>

<p><b>Động cơ:</b> V4 Desmosedici</p>

<p>
Panigale V4 S là biểu tượng tốc độ và công nghệ của Ducati.
</p>

`;

}

else if(bike === "rsv4"){

detail.innerHTML = `

<h2>Aprilia RSV4 1100 Factory</h2>

<p><b>Loại xe:</b> Racing Superbike</p>

<p><b>Mã lực:</b> 217 HP</p>

<p><b>Vận tốc tối đa:</b> 305 km/h</p>

<p><b>Động cơ:</b> 1099cc V4</p>

<p>
RSV4 nổi tiếng với khả năng vào cua và hiệu suất đường đua cực mạnh.
</p>

`;

}

else if(bike === "fireblade"){

detail.innerHTML = `

<h2>Honda CBR1000RR-R Fireblade SP</h2>

<p><b>Loại xe:</b> Superbike</p>

<p><b>Mã lực:</b> 214 HP</p>

<p><b>Vận tốc tối đa:</b> 299 km/h</p>

<p><b>Động cơ:</b> 999cc</p>

<p>
Fireblade SP là mẫu superbike mạnh nhất của Honda hiện nay.
</p>

`;

}

else if(bike === "ls218"){

detail.innerHTML = `

<h2>Lightning LS-218</h2>

<p><b>Loại xe:</b> Electric Superbike</p>

<p><b>Mã lực:</b> 244 HP</p>

<p><b>Vận tốc tối đa:</b> 350 km/h</p>

<p><b>Động cơ:</b> Điện hiệu suất cao</p>

<p>
Lightning LS-218 là một trong những superbike điện nhanh nhất thế giới.
</p>

`;

}

else if(bike === "hayabusa"){

detail.innerHTML = `

<h2>Suzuki Hayabusa</h2>

<p><b>Loại xe:</b> Sport Touring</p>

<p><b>Mã lực:</b> 190 HP</p>

<p><b>Vận tốc tối đa:</b> 312 km/h</p>

<p><b>Động cơ:</b> 1340cc</p>

<p>
Hayabusa nổi tiếng với tốc độ cực cao và khả năng chạy đường dài ổn định.
</p>

`;

}

else if(bike === "zx10r"){

detail.innerHTML = `

<h2>Kawasaki Ninja ZX-10R</h2>

<p><b>Loại xe:</b> Racing Superbike</p>

<p><b>Mã lực:</b> 203 HP</p>

<p><b>Vận tốc tối đa:</b> 299 km/h</p>

<p><b>Động cơ:</b> 998cc</p>

<p>
ZX-10R là mẫu superbike từng vô địch WSBK nhiều lần.
</p>

`;

}

else if(bike === "bmw"){

detail.innerHTML = `

<h2>BMW S1000RR</h2>

<p><b>Loại xe:</b> Superbike</p>

<p><b>Mã lực:</b> 205 HP</p>

<p><b>Vận tốc tối đa:</b> 303 km/h</p>

<p><b>Động cơ:</b> 999cc</p>

<p>
BMW S1000RR mang thiết kế hiện đại,
công nghệ cao và hiệu năng cực mạnh.
</p>

`;

}

}

function sendMessage(){

let input = document.getElementById("userMessage");

let chatArea = document.getElementById("chatArea");

if(input.value.trim() !== ""){

chatArea.innerHTML += `

<p class="user-chat">
${input.value}
</p>

`;

chatArea.innerHTML += `

<p class="admin-chat">
Cảm ơn bạn đã liên hệ 🔥<br>
Bố Già Moto Dealer sẽ phản hồi sớm nhất.
</p>

`;

input.value = "";

chatArea.scrollTop = chatArea.scrollHeight;

}

}