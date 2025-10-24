
    function yoshHisobla(ism, hozirgiYil, tugilganYil) {
      let yosh = hozirgiYil - tugilganYil;
      return `${ism}, yoshingiz ${yosh}`;
    }

    let ism = prompt("Ismingizni kiriting:");
    let hozirgiYil = prompt("Hozirgi yilni kiriting:");
    let tugilganYil = prompt("Tug‘ilgan yilingizni kiriting:");
    
    if (ism && hozirgiYil && tugilganYil) {
      let natija = yoshHisobla(ism, Number(hozirgiYil), Number(tugilganYil));
      alert(natija); 
    } else {
      alert(" Iltimos, barcha maydonlarni to‘ldiring!");
    }
 

