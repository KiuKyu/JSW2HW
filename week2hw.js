// Bài 1
function myname() {
    alert('Quách Ngọc Minh');
}

// Bài 2
function pow() {
    let num1 = prompt('Nhập vào số để tính bình phương');
    alert(Math.pow(num1,2));
}

// Bài 3
function mul() {
    // let a = document.getElementById('aNum').value;
    // let b = document.getElementById('bNum').value;
    // document.getElementById('mul').innerHTML = "S = " + (a * b);

    // Viết tắt
    document.getElementById('mul').innerHTML = "S = " + (document.getElementById('aNum').value * document.getElementById('bNum').value);
}

// Bài 4
function calc(){
    // a. Tính chu vi + diện tích hình vuông

    let numA = parseInt(document.getElementById('numA').value);
    let numB = parseInt(document.getElementById('numB').value);
    let numC = parseInt(document.getElementById('numC').value);

    // let chuVi = numA * 4;
    // let dienTich = Math.pow(numA,2);
    // document.getElementById('pr1').innerHTML = 'Chu vi hình vuông là: ' + chuVi;
    // document.getElementById('pr2').innerHTML = 'Diện tích hình vuông là: ' + dienTich;

    // Viết tắt
    document.getElementById('pr1').innerHTML = 'Chu vi hình vuông là: ' + document.getElementById('numA').value * 4;
    document.getElementById('pr2').innerHTML = 'Diện tích hình vuông là: ' + Math.pow(document.getElementById('numA').value,2);

    // b. Tính a^2 + b^2
    // let aBP = Math.pow(numA,2);
    // let bBP = Math.pow(numB,2);
    // document.getElementById('pr3').innerHTML = 'A bình phương là: ' + aBP;
    // if (numB == ''){
    //     document.getElementById('pr4').innerHTML = '&nbsp;';
    // }else{
    //     document.getElementById('pr4').innerHTML = 'B bình phương là: ' + bBP;
    // }

    // Viết tắt
    document.getElementById('pr3').innerHTML = 'A bình phương là: ' + Math.pow(document.getElementById('numA').value,2);
    if (numB == ''){
        document.getElementById('pr4').innerHTML = '&nbsp;';
    }
    else {
        document.getElementById('pr4').innerHTML = 'B bình phương là: ' + Math.pow(document.getElementById('numB').value,2);
    }

    // c. Tính thế kỷ
    // let cHet = Math.floor(numA / 100);
    // let kHet = cHet + 1;
    // if (numA % 100 == 0){
    //     document.getElementById('pr5').innerHTML = 'Thế kỷ: ' + cHet;
    // }else {
    //     document.getElementById('pr5').innerHTML = 'Thế kỷ: ' + kHet;
    // }

    // Viết tắt
    if (numA % 100 == 0){
        document.getElementById('pr5').innerHTML = 'Thế kỷ: ' + (Math.floor(numA / 100));
    }
    else {
        document.getElementById('pr5').innerHTML = 'Thế kỷ: ' + (Math.floor(numA / 100) + 1);
    }

    // d. Kiểm tra loại tam giác
    if (numA + numB > numC && numB + numC > numA && numA + numC > numB){
        if (numA == numB && numB == numC){
            document.getElementById('pr6').innerHTML = 'Tam giác đều';
        }
        else if (numA == numB || numB == numC || numC == numA){
            document.getElementById('pr6').innerHTML = 'Tam giác cân';
        }
        else if (Math.pow(numA,2) == (Math.pow(numB,2) + Math.pow(numC,2)) || Math.pow(numB,2) == (Math.pow(numA,2) + Math.pow(numC,2)) || Math.pow(numC,2) == (Math.pow(numA,2) + Math.pow(numB,2))){
            document.getElementById('pr6').innerHTML = 'Tam giác vuông';
        }
        else {
            document.getElementById('pr6').innerHTML = 'Tam giác nhọn';
        }
    }
    else {
        document.getElementById('pr6').innerHTML = 'Không phải là tam giác';
    }
}