document.getElementById("demo").style.visibility = "hidden";
document.getElementById("demo2").style.visibility = "hidden";
document.getElementById("demoship").style.visibility = "hidden";
document.getElementById("demobuild").style.visibility = "hidden";
document.getElementById("demostreet").style.visibility = "hidden";
document.getElementById("demoregion").style.visibility = "hidden";
document.getElementById("demofloor").style.visibility = "hidden";
document.getElementById("demoflat").style.visibility = "hidden";
document.getElementById("demogovern").style.visibility = "hidden";
document.getElementById("demolandmark").style.visibility = "hidden";
document.getElementById("demoadd").style.visibility = "hidden";
document.getElementById("demonum").style.visibility = "hidden";
document.getElementById("demonum1").style.visibility = "hidden";
document.getElementById("demonum2").style.visibility = "hidden";


function getBotResponse(input) {

    //Language
    if (input == "English") {
        document.getElementById("demo2").innerHTML = "";
        return '<button class="botText buttonstyle" onclick="Branch();getResponse();">Find Nearest Branch</button><button class="botText buttonstyle" onclick="Price();getResponse()">Calculate Price</button><button class="botText buttonstyle" onclick="Trace();getResponse()">Trace Your Shipment</button><a href="tel:01099292629"<button class="botText buttonstyle" onclick="req();getResponse()">Request a Pickup</button></a><button class="botText buttonstyle" onclick="Messa();getResponse()">Send a Message</button><a href="tel:16231"><button class="botText buttonstyle" onclick="Contact();getResponse()">Contact Us</button></a>';
    }
    else if (input == "عربى") {
        document.getElementById("demo2").innerHTML = "";
        return '<button class="botText buttonstyle" onclick="Branch2();getResponse()">اقرب فرع</button><br><button class="botText buttonstyle" onclick="Price2();getResponse()">تكلفة الشحن</button><br><button class="botText buttonstyle" onclick="Trace2();getResponse()">تتبع شحنتك</button><br><a href="tel:01099292629"<button class="botText buttonstyle" onclick="req2();getResponse()">طلب رفع بيكاب</button></a><br><button class="botText buttonstyle" onclick="Messa2();getResponse()">ابعت رسالتك</button><br><a href="tel:16231"><button class="botText buttonstyle" onclick="Contact2();getResponse()">تواصل معنا</button></a>';
    }



    //Nearest Branch
    else if (input == "Find Nearest Branch") {
        document.getElementById("demo2").innerHTML = "";
        return '<button class="botText buttonstyle" onclick="cairo();getResponse()">Cairo</button><br><button class="botText buttonstyle" onclick="alex();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="upperegypt();getResponse()">Upper Egypt</button><br><button class="botText buttonstyle" onclick="delta();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="canal();getResponse()">Canal</button><br>';
    }
    else if (input == "اقرب فرع") {
        document.getElementById("demo2").innerHTML = "";
        return '<button class="botText buttonstyle" onclick="cairo2();getResponse()">القاهرة</button><br><button class="botText buttonstyle" onclick="alex2();getResponse()">الاسكندرية</button><br><button class="botText buttonstyle" onclick="upperegypt2();getResponse()">الصعيد</button><br><button class="botText buttonstyle" onclick="delta2();getResponse()">الدلتا</button><br><button class="botText buttonstyle" onclick="canal2();getResponse()">القناة</button><br>';
    }




    //calculate price
    else if (input == "Calculate Price") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="cgreatcairo();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandria();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdelta();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanal();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegypt();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegypt();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegypt();getResponse()">South UpperEgypt</button><br>';
    }












    //From Price
    else if (input == "Great Cairo") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="cairoprice();getResponse()">Cairo</button><br><button class="botText buttonstyle" onclick="gizaprice();getResponse()">Giza</button><br><button class="botText buttonstyle" onclick="qalyubiaprice();getResponse()">Qalyubia</button><br>'
    }

    else if (input == " Alexandria") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="alexandriaprice();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="beheiraprice();getResponse()">Beheira</button><br><button class="botText buttonstyle" onclick="matruhprice();getResponse()">Matruh</button><br>'
    }

    else if (input == " Delta") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="dakahliaprice();getResponse()">Dakahlia</button><br><button class="botText buttonstyle" onclick="kafrelsheikhprice();getResponse()">Kafr El Sheikh</button><br><button class="botText buttonstyle" onclick="gharbiaprice();getResponse()">Gharbia</button><br><button class="botText buttonstyle" onclick="monufiaprice();getResponse()">Monufia</button><br><button class="botText buttonstyle" onclick="damiettaprice();getResponse()">Damietta</button><br>'
    }

    else if (input == " Canal") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="portsaidprice();getResponse()">Port Said</button><br><button class="botText buttonstyle" onclick="ismailiaprice();getResponse()">Ismailia</button><br><button class="botText buttonstyle" onclick="suezprice();getResponse()">Suez</button><br><button class="botText buttonstyle" onclick="sharqiaprice();getResponse()">Sharqia</button><br><button class="botText buttonstyle" onclick="northsinaiprice();getResponse()">North Sinai</button><br><button class="botText buttonstyle" onclick="southsinaiprice();getResponse()">South Sinai</button><br>'
    }

    else if (input == "North UpperEgypt") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="benisuefprice();getResponse()">Beni Suef</button><br><button class="botText buttonstyle" onclick="minyaprice();getResponse()">Minya</button><br><button class="botText buttonstyle" onclick="faiyumprice();getResponse()">Faiyum</button><br>'
    }

    else if (input == "Middle UpperEgypt") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="asyutprice();getResponse()">Asyut</button><br><button class="botText buttonstyle" onclick="newvalleyprice();getResponse()">New Valley</button><br>'
    }

    else if (input == "South UpperEgypt") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="sohagprice();getResponse()">Sohag</button><br><button class="botText buttonstyle" onclick="qenaprice();getResponse()">Qena</button><br><button class="botText buttonstyle" onclick="luxorprice();getResponse()">Luxor</button><br><button class="botText buttonstyle" onclick="aswanprice();getResponse()">Aswan</button><br><button class="botText buttonstyle" onclick="redseaprice();getResponse()">Red Sea</button><br>'
    }








    //To
    else if (input == "Great Cairo ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="cairopriceto();getResponse()">Cairo</button><br><button class="botText buttonstyle" onclick="gizapriceto();getResponse()">Giza</button><br><button class="botText buttonstyle" onclick="qalyubiapriceto();getResponse()">Qalyubia</button><br>'
    }

    else if (input == " Alexandria ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="alexandriapriceto();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="beheirapriceto();getResponse()">Beheira</button><br><button class="botText buttonstyle" onclick="matruhpriceto();getResponse()">Matruh</button><br>'
    }

    else if (input == " Delta ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="dakahliapriceto();getResponse()">Dakahlia</button><br><button class="botText buttonstyle" onclick="kafrelsheikhpriceto;getResponse()">Kafr El Sheikh</button><br><button class="botText buttonstyle" onclick="gharbiapriceto();getResponse()">Gharbia</button><br><button class="botText buttonstyle" onclick="monufiapriceto();getResponse()">Monufia</button><br><button class="botText buttonstyle" onclick="damiettapriceto();getResponse()">Damietta</button><br>'
    }

    else if (input == " Canal ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="portsaidpriceto();getResponse()">Port Said</button><br><button class="botText buttonstyle" onclick="ismailiapriceto();getResponse()">Ismailia</button><br><button class="botText buttonstyle" onclick="suezpriceto();getResponse()">Suez</button><br><button class="botText buttonstyle" onclick="sharqiapriceto();getResponse()">Sharqia</button><br><button class="botText buttonstyle" onclick="northsinaipriceto();getResponse()">North Sinai</button><br><button class="botText buttonstyle" onclick="southsinaipriceto();getResponse()">South Sinai</button><br>'
    }

    else if (input == "North UpperEgypt ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="benisuefpriceto();getResponse()">Beni Suef</button><br><button class="botText buttonstyle" onclick="minyapriceto();getResponse()">Minya</button><br><button class="botText buttonstyle" onclick="faiyumpriceto();getResponse()">Faiyum</button><br>'
    }

    else if (input == "Middle UpperEgypt ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="asyutpriceto();getResponse()">Asyut</button><br><button class="botText buttonstyle" onclick="newvalleypriceto();getResponse()">New Valley</button><br>'
    }

    else if (input == "South UpperEgypt ") {
        document.getElementById("demo2").innerHTML = "";
        return 'From : <br><button class="botText buttonstyle" onclick="sohagpriceto();getResponse()">Sohag</button><br><button class="botText buttonstyle" onclick="qenapriceto();getResponse()">Qena</button><br><button class="botText buttonstyle" onclick="luxorpriceto();getResponse()">Luxor</button><br><button class="botText buttonstyle" onclick="aswanpriceto();getResponse()">Aswan</button><br><button class="botText buttonstyle" onclick="redseapriceto();getResponse()">Red Sea</button><br>'
    }

















    else if (input == "Cairo ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Alexandria ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Aswan ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Asyut ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Beheira ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Beni Suef ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Dakahlia ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Damietta ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Faiyum ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Gharbia ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Giza ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Ismailia ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Kafr El Sheikh ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Luxor ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Matruh ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Minya ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Monufia ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "New Valley ") {
        document.getElementById("demo2").innerHTML = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "North Sinai ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Port Said ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Qalyubia ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Qena ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Red Sea ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Sharqia ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Sohag ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "South Sinai ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }

    else if (input == "Suez ") {
        document.getElementById("demo2").value = "";
        document.getElementById("From").innerHTML = input;
        return 'To : <br><button class="botText buttonstyle" onclick="cgreatcairoto();getResponse()">Great Cairo</button><br><button class="botText buttonstyle" onclick="calexandriato();getResponse()">Alexandria</button><br><button class="botText buttonstyle" onclick="cdeltato();getResponse()">Delta</button><br><button class="botText buttonstyle" onclick="ccanalto();getResponse()">Canal</button><br><button class="botText buttonstyle" onclick="cnupperegyptto();getResponse()">North UpperEgypt</button><br><button class="botText buttonstyle" onclick="cmupperegyptto();getResponse()">Middle UpperEgypt</button><br><button class="botText buttonstyle" onclick="csupperegyptto();getResponse()">South UpperEgypt</button><br>';
    }











    else if (input == "Cairo  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Alexandria  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Aswan  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Asyut  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Beheira  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Beni Suef  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Dakahlia  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Damietta  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Faiyum  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Gharbia  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Giza  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Ismailia  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Kafr El Sheikh  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Luxor  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Matruh  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Minya  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Monufia  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "New Valley  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "North Sinai  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Port Said  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Qalyubia  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Qena  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Red Sea  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Sharqia  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Sohag  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "South Sinai  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }

    else if (input == "Suez  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }






























    else if (input == "Alexandria  ") {
        document.getElementById("demo2").value = "";
        document.getElementById("To").innerHTML = input;
        return grid[document.getElementById('From').innerHTML][document.getElementById('To').innerHTML];
    }
    else if (input == " Cairo") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/3i4UI5H" target="_blank"<button class="botText buttonstyle" onclick="HeadOffice()">Head Office</button></a><a href="https://bit.ly/3i4UI5H" target="_blank"<button class="botText buttonstyle" onclick="Maadi()">Maadi</button></a><a href="https://bit.ly/3ylYflF" target="_blank"<button class="botText buttonstyle" onclick="MisrElGdeeda()">MisrElGdeeda</button></a><a href="https://bit.ly/3ibIisR" target="_blank"<button class="botText buttonstyle" onclick="Nasr-City()">Nasr City</button></a><a href="https://bit.ly/3yamgMl" target="_blank"<button class="botText buttonstyle" onclick="ElTagamoa()">ElTagamoa</button></a><a href="https://bit.ly/3x86Eba" target="_blank"<button class="botText buttonstyle" onclick="October()">October</button></a><a href="https://bit.ly/3ArYkp2" target="_blank"<button class="botText buttonstyle" onclick="Helwan()">Helwan</button></a><a href="https://bit.ly/3lB6PYK" target="_blank"<button class="botText buttonstyle" onclick="Dokki()">Dokki</button></a><a href="https://bit.ly/3hKAwFC" target="_blank"<button class="botText buttonstyle" onclick="ElMaryoteia()">ElMaryoteia</button></a>';
    }
    else if (input == " Alexandria") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/3ilfQ7X" target="_blank"<button class="botText buttonstyle" onclick="Alexandria()">Alexandria</button></a><a href="https://bit.ly/3CuODHb" target="_blank"<button class="botText buttonstyle" onclick="MarsaMatrouh()">MarsaMatrouh</button></a>';
    }
    else if (input == " Upper Egypt") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/2WMszbn" target="_blank"<button class="botText buttonstyle" onclick="ElMenia()">ElMenia</button></a><a href="https://bit.ly/3BOsDaw" target="_blank"<button class="botText buttonstyle" onclick="Assuit()">Assuit</button></a><a href="https://bit.ly/2WHM6cR" target="_blank"<button class="botText buttonstyle" onclick="Qena()">Qena</button></a><a href="https://bit.ly/2VVrm1o" target="_blank"<button class="botText buttonstyle" onclick="Luxor()">Luxor</button></a><a href="https://bit.ly/2Z0y6Ms" target="_blank"<button class="botText buttonstyle" onclick="Beni-Suef()">Beni-Suef</button></a>';
    }
    else if (input == " Delta") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/2WO3qNu" target="_blank"<button class="botText buttonstyle" onclick="Tanta()">Tanta</button></a><a href="https://bit.ly/3tPic2Z" target="_blank"<button class="botText buttonstyle" onclick="ElMansoura()">ElMansoura</button></a><a href="https://bit.ly/3C1UvIt" target="_blank"<button class="botText buttonstyle" onclick="ElSharkeya()">ElSharkeya</button></a><a href="https://bit.ly/3hGUEZa" target="_blank"<button class="botText buttonstyle" onclick="ElMonofeya()">ElMonofeya</button></a><a href="https://bit.ly/3hK265Z" target="_blank"<button class="botText buttonstyle" onclick="Damanhour()">Damanhour</button></a>';
    }
    else if (input == " Canal") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/3lDYYJL" target="_blank"<button class="botText buttonstyle" onclick="Port-Said()">Port-Said</button></a><a href="https://bit.ly/2Wpg6Kl" target="_blank"<button class="botText buttonstyle" onclick="Suez()">Suez</button></a><a href="https://bit.ly/3AnaWhf" target="_blank"<button class="botText buttonstyle" onclick="Ismailia()">Ismailia</button></a><a href="https://bit.ly/3flUgyf" target="_blank"<button class="botText buttonstyle" onclick="Hurghada()">Hurghada</button></a>';
    }
    
    else if (input == " القاهرة ") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/3i4UI5H" target="_blank"<button class="botText buttonstyle" onclick="Maadi2()">المركز الرئيسى</button></a><a href="https://bit.ly/3i4UI5H" target="_blank"<button class="botText buttonstyle" onclick="Maadi2()">المعادى</button></a><a href="https://bit.ly/3ylYflF" target="_blank"<button class="botText buttonstyle" onclick="MisrElGdeeda2()">مصر الجديدة</button></a><a href="https://bit.ly/3ibIisR" target="_blank"<button class="botText buttonstyle" onclick="NasrCity2()">مدينة نصر</button></a><a href="https://bit.ly/3yamgMl" target="_blank"<button class="botText buttonstyle" onclick="ElTagamoa2()">التجمع الخامس</button></a><a href="https://bit.ly/3x86Eba" target="_blank"<button class="botText buttonstyle" onclick="October2()">اكتوبر</button></a><a href="https://bit.ly/3lB6PYK" target="_blank"<button class="botText buttonstyle" onclick="Dokki2()">الدقى</button></a><a href="https://bit.ly/3hKAwFC" target="_blank"<button class="botText buttonstyle" onclick="ElMaryoteia2()">المريوطية</button></a><a href="https://bit.ly/3ArYkp2" target="_blank"<button class="botText buttonstyle" onclick="Helwan2()">حلوان</button></a>';
    }
    else if (input == " الاسكندرية ") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/3ilfQ7X" target="_blank"<button class="botText buttonstyle" onclick="Alexandria2()">الاسكندرية</button></a><a href="https://bit.ly/3CuODHb" target="_blank"<button class="botText buttonstyle" onclick="MarsaMatrouh2()">مرسى مطروح</button></a>';
    }
    else if (input == "الصعيد") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/2WMszbn" target="_blank"<button class="botText buttonstyle" onclick="ElMenia2()">المنيا</button></a><a href="https://bit.ly/3BOsDaw" target="_blank"<button class="botText buttonstyle" onclick="Assuit2()">اسيوط</button></a><a href="https://bit.ly/2WHM6cR" target="_blank"<button class="botText buttonstyle" onclick="Qena2()">قنا</button></a><a href="https://bit.ly/2Z0y6Ms" target="_blank"<button class="botText buttonstyle" onclick="BeniSuef2()">بنى سويف</button></a><a href="https://bit.ly/2VVrm1o" target="_blank"<button class="botText buttonstyle" onclick="Luxor2()">الاقصر</button></a>';
    }
    else if (input == "الدلتا") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/2WO3qNu" target="_blank"<button class="botText buttonstyle" onclick="Tanta2()">طنطا</button></a><a href="https://bit.ly/3tPic2Z" target="_blank"<button class="botText buttonstyle" onclick="ElMansoura2()">المنصورة</button></a><a href="https://bit.ly/3C1UvIt" target="_blank"<button class="botText buttonstyle" onclick="ElSharkeya2()">الشرقية</button></a><a href="https://bit.ly/3hGUEZa" target="_blank"<button class="botText buttonstyle" onclick="ElMonofeya2()">المنوفية</button></a><a href="https://bit.ly/3hK265Z" target="_blank"<button class="botText buttonstyle" onclick="Damanhour2()">دمنهور</button></a>';
    }
    else if (input == "القناة") {
        document.getElementById("demo2").innerHTML = "";
        return '<a href="https://bit.ly/3lDYYJL" target="_blank"<button class="botText buttonstyle" onclick="PortSaid2()">بورسعيد</button></a><a href="https://bit.ly/2Wpg6Kl" target="_blank"<button class="botText buttonstyle" onclick="Suez2()">السويس</button></a><a href="https://bit.ly/3AnaWhf" target="_blank"<button class="botText buttonstyle" onclick="Ismailia2()">الاسماعيلية</button></a><a href="https://bit.ly/3flUgyf" target="_blank"<button class="botText buttonstyle" onclick="Hurghada2()">الغردقة</button></a>';
    }
    else if (input == "تتبع شحنتك") {
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo2").innerHTML = 'trace2';
        return "اكتب رقم شحنتك";
    }
    else if (input == "طلب رفع بيكاب") {
        document.getElementById("demo2").innerHTML = "";
        return "اكتب بياناتك";
    }
    else if (input == "تأكيد بيانات الشحنة") {
        document.getElementById("demo2").innerHTML = "";
        return "ادخل رقم شحنتك";
    }
    else if (input == "ابعت رسالتك") {
        document.getElementById("demo2").innerHTML = "";
        return "اكتب الرسالة";
    }
    else if (input == "Trace Your Shipment") {
        document.getElementById("demo").innerHTML = "";
        document.getElementById("demo2").innerHTML = 'trace';
        return "Enter your shipment number";
    }
    else if (input == "Request a Pickup") {
        document.getElementById("demo2").innerHTML = "";
        return "Calling...";
    }
    else if (input == "Confirm Shipment Data") {
        document.getElementById("demo2").innerHTML = "";
        return "Enter your shipment number";
    }
    else if (input == "Send a Message") {
        document.getElementById("demo2").innerHTML = "";
        return "Write your Message";
    }
    else if (input == "Confirm Shipment Number") {
        if(document.getElementById("demo").innerHTML != "")
        {
            document.getElementById("demo2").innerHTML = "";
            return document.getElementById("demo").innerHTML + '<br><br>Do you want to change Your Data?<br><button class="botText buttonstyle" onclick="yes();getResponse()">Yes</button><button class="botText buttonstyle" onclick="no();getResponse()">No</button>';
        }
        else
        {
            document.getElementById("demo2").innerHTML = 'trace';
            return 'Shipment number does not exist, please re-enter it';
        }
        
    }
    else if (input == "Edit Shipment Number") {
        document.getElementById("demo").innerHTML = "";
        return "Enter your shipment number";
    }
    else if (input == "Contact Us") {
        document.getElementById("demo2").innerHTML = "";
        return "Calling...";
    }
    else if (input == "تأكيد رقم الشحنة") {
        if(document.getElementById("demo").innerHTML != "")
        {
            document.getElementById("demo2").innerHTML = "";
            return document.getElementById("demo").innerHTML + '<br><br>هل تريد تغيير بيانات شحنتك؟<br><button class="botText buttonstyle" onclick="yes2();getResponse()">نعم</button><button class="botText buttonstyle" onclick="no2();getResponse()">لا</button>';
        }
        else
        {
            document.getElementById("demo2").innerHTML = 'trace2';
            return 'رقم الشحنة غير صحيح, ادخله مرة اخرى';
        }
    }

    else if (input == "نعم") {
        document.getElementById("demo2").innerHTML = 'otp2';
        return 'OTP ادخل رقم ';
    }

    else if (document.getElementById("demo2").innerHTML == 'otp2') {
        document.getElementById("demo2").innerHTML = '';
        if(input =='')
        {
            document.getElementById("demo2").innerHTML = 'otp2';
            return 'غير صحيح, ادخله مرة اخرى OTP رقم';
        }
        else if(input == otpcode)
        {
            return 'هل تريد تغيير عنوانك؟<br><button class="botText buttonstyle" onclick="yesfloor2();getResponse()">نعم</button><button class="botText buttonstyle" onclick="nofloor2();getResponse()">لا</button>';
        }
        else
        {
            document.getElementById("demo2").innerHTML = 'otp2';
            return 'غير صحيح, ادخله مرة اخرى OTP رقم';
        }
    }

    else if (input == "نعم ") {
        document.getElementById("demo2").innerHTML = 'build2';
        return 'رقم العمارة؟';
    }





    else if (document.getElementById("demo2").innerHTML == 'floor2') {
        document.getElementById("demo2").innerHTML = 'flat2';
        document.getElementById("demofloor").innerHTML = input;
        return 'رقم الشقة؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'flat2') {
        document.getElementById("demo2").innerHTML = 'region2';
        document.getElementById("demoflat").innerHTML = input;
        return 'المنطقة؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'build2') {
        document.getElementById("demo2").innerHTML = 'street2';
        document.getElementById("demobuild").innerHTML = input;
        return 'اسم الشارع؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'street2') {
        document.getElementById("demo2").innerHTML = 'floor2';
        document.getElementById("demostreet").innerHTML = input;
        return 'الدور؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'region2') {
        document.getElementById("demo2").innerHTML = 'governorate2';
        document.getElementById("demoregion").innerHTML = input;
        return 'المحافظة؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'governorate2') {
        document.getElementById("demo2").innerHTML = 'landmark2';
        document.getElementById("demogovern").innerHTML = input;
        return 'اقرب علامة مميزة؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'landmark2') {
        document.getElementById("demolandmark").innerHTML= input;
        document.getElementById("demoadd").innerHTML = 'رقم ' + document.getElementById('demobuild').innerHTML + ' ' + document.getElementById('demostreet').innerHTML + ' - ' +  'الدور : ' + document.getElementById('demofloor').innerHTML + ' - ' + 'شقة : ' + document.getElementById('demoflat').innerHTML + ' - ' + document.getElementById('demolandmark').innerHTML + ' - ' + document.getElementById('demoregion').innerHTML + ' - ' + document.getElementById('demogovern').innerHTML + ' /bot';
        document.getElementById("demo2").innerHTML='';
        return '<button class="botText buttonstyle" onclick="confirmaddress2();getResponse()">تأكيد العنوان</button><br><button class="botText buttonstyle" onclick="editaddress2();getResponse()">تعديل العنوان</button>';
    }

    else if (input == 'تأكيد العنوان') {
        editadd();
        return 'تم تحديث عنوانك بنجاح<br>هل تريد تغيير رقم هاتفك؟<br><button class="botText buttonstyle" onclick="yesnum3();getResponse()">نعم</button><button class="botText buttonstyle" onclick="nonum3();getResponse()">لا</button>';
    }
    
    else if (input == 'تعديل العنوان') {
        document.getElementById("demo2").innerHTML = 'build2';
        return 'رقم العمارة؟';
    }
   

    else if (input == "نعم  ") {
        document.getElementById("demo2").innerHTML = 'mob3';
        return 'رقم هاتفك الجديد؟';
    }
    else if (input == "لا  ") {
        if(document.getElementById("demo2").innerHTML == 'لا')
        {
            document.getElementById("demo2").innerHTML = '';
            return 'شكراً لك';
        }
        else
        {
            return ': عنوان شحنتك بعد التعديل <br>' + document.getElementById('demoadd').innerHTML.slice(0,-5);
        }
    }


    else if (document.getElementById("demo2").innerHTML == 'mob3') {
        document.getElementById("demo2").innerHTML = '';
        document.getElementById("demonum1").innerHTML = input;
        document.getElementById("demonum").innerHTML = input;
        return 'هل تريد اضافة رقم هاتف اخر؟<br><button class="botText buttonstyle" onclick="yesnum4();getResponse()">نعم</button><button class="botText buttonstyle" onclick="nonum4();getResponse()">لا</button>';
    }


    else if (input == "لا   ") {
        editnum();
        return 'تم تحديث رقم هاتفك بنجاح<br><br>: عنوان شحنتك بعد التعديل <br>' + document.getElementById('demoadd').innerHTML.slice(0,-5) + '<br>: رقم هاتفك بعد التعديل <br>' + document.getElementById('demonum').innerHTML;
    }

    else if (input == "نعم   ") {
        document.getElementById("demo2").innerHTML = 'mob4';
        return 'رقم هاتفك الجديد؟';
    }

    else if (document.getElementById("demo2").innerHTML == 'mob4') {
        document.getElementById("demonum2").innerHTML = input;
        document.getElementById("demonum").innerHTML = document.getElementById("demonum1").innerHTML  + ' - ' + document.getElementById("demonum2").innerHTML;
        editnum();
        return 'تم تحديث رقم هاتفك بنجاح<br><br>: عنوان شحنتك بعد التعديل <br>' + document.getElementById('demoadd').innerHTML.slice(0,-5) + '<br>: رقم هاتفك بعد التعديل <br>' + document.getElementById('demonum').innerHTML;
    }











    else if (input == "لا ") {
        document.getElementById("demo2").innerHTML = 'لا';
        return 'هل تريد تغيير رقم هاتفك؟<br><button class="botText buttonstyle" onclick="yesnum3();getResponse()">نعم</button><button class="botText buttonstyle" onclick="nonum3();getResponse()">لا</button>';
    }

    else if (input == "لا") {
        document.getElementById("demo2").innerHTML = 'لا';
        return 'شكراً لك';
    }

    else if (input == "تعديل رقم الشحنة") {
        document.getElementById("demo").innerHTML = "";
        return "ادخل رقم شحنتك";
    }
    else if (document.getElementById("demo2").innerHTML == 'trace') {
        document.getElementById("demoship").innerHTML = input ;
        myFunction(input);
        return '<button class="botText buttonstyle" onclick="conf();getResponse();">Confirm Shipment Number</button><br><button class="botText buttonstyle" onclick="edit();getResponse();">Edit Shipment Number</button>';
    }
    else if (document.getElementById("demo2").innerHTML == 'trace2') {
        document.getElementById("demoship").innerHTML = input ;
        myFunction(input);
        return '<button class="botText buttonstyle" onclick="conf2();getResponse();">تأكيد رقم الشحنة</button><br><button class="botText buttonstyle" onclick="edit2();getResponse();">تعديل رقم الشحنة</button>';
    }
    else if (input == "Yes") {
        document.getElementById("demo2").innerHTML = 'otp';
        return 'Please Enter OTP number';
    }

    else if (document.getElementById("demo2").innerHTML == 'otp') {
        document.getElementById("demo2").innerHTML = '';
        if(input =='')
        {
            document.getElementById("demo2").innerHTML = 'otp';
            return 'OTP is incorrect, please re-enter it';
        }
        else if(input == otpcode)
        {
            return 'Do you Want to Change your address?<br><button class="botText buttonstyle" onclick="yesfloor();getResponse()">Yes</button><button class="botText buttonstyle" onclick="nofloor();getResponse()">No</button>';
        }
        else
        {
            document.getElementById("demo2").innerHTML = 'otp';
            return 'OTP is incorrect, please re-enter it';
        }
    }

    else if (input == "No") {
        document.getElementById("demo2").innerHTML = '';
        topFunction();
        return "Thanks for your time";
    }
    else if (input == "Yes ") {
        document.getElementById("demo2").innerHTML = 'build';
        return 'Enter your Building number';
    }
    else if (input == "No ") {
        document.getElementById("demo2").innerHTML = 'no';
        return 'Do you want to update your mobile number?<br><button class="botText buttonstyle" onclick="yesnum();getResponse()">Yes</button><button class="botText buttonstyle" onclick="nonum();getResponse()">No</button>';
    }

    else if (document.getElementById("demo2").innerHTML == 'floor') {
        document.getElementById("demo2").innerHTML = 'flat';
        document.getElementById("demofloor").innerHTML = input;
        return 'Enter your Flat number';
    }

    else if (document.getElementById("demo2").innerHTML == 'flat') {
        document.getElementById("demo2").innerHTML = 'region';
        document.getElementById("demoflat").innerHTML = input;
        return 'Enter your Region';
    }

    else if (document.getElementById("demo2").innerHTML == 'build') {
        document.getElementById("demo2").innerHTML = 'street';
        document.getElementById("demobuild").innerHTML = input;
        return 'Enter your Street name';
    }

    else if (document.getElementById("demo2").innerHTML == 'street') {
        document.getElementById("demo2").innerHTML = 'floor';
        document.getElementById("demostreet").innerHTML = input;
        return 'Enter your Floor number';
    }

    else if (document.getElementById("demo2").innerHTML == 'region') {
        document.getElementById("demo2").innerHTML = 'governorate';
        document.getElementById("demoregion").innerHTML = input;
        return 'Enter your Governorate';
    }

    else if (document.getElementById("demo2").innerHTML == 'governorate') {
        document.getElementById("demo2").innerHTML = 'landmark';
        document.getElementById("demogovern").innerHTML = input;
        return 'Enter your nearest Landmark';
    }

    else if (document.getElementById("demo2").innerHTML == 'landmark') {
        document.getElementById("demolandmark").innerHTML= input;
        document.getElementById("demoadd").innerHTML = document.getElementById('demobuild').innerHTML+ ' ' + document.getElementById('demostreet').innerHTML + ' - ' +  'Floor : ' + document.getElementById('demofloor').innerHTML + ' - ' + 'Flat : ' + document.getElementById('demoflat').innerHTML + ' - ' + document.getElementById('demolandmark').innerHTML + ' - ' + document.getElementById('demoregion').innerHTML + ' - ' + document.getElementById('demogovern').innerHTML + ' /bot';
        document.getElementById("demo2").innerHTML='';
        return '<button class="botText buttonstyle" onclick="confirmaddress();getResponse()">Confirm Address</button><br><button class="botText buttonstyle" onclick="editaddress();getResponse()">Edit Address</button>';
    }

    else if (input == 'Confirm Address') {
        editadd();
        return 'Your Address is updated Successfully<br>Do you want to update your mobile number?<br><button class="botText buttonstyle" onclick="yesnum();getResponse()">Yes</button><button class="botText buttonstyle" onclick="nonum();getResponse()">No</button>';
    }

     else if (input == "Edit Address") {
        document.getElementById("demo2").innerHTML = 'build';
        return 'Enter your Building number';
     }

    else if (input == "Yes  ") {
        document.getElementById("demo2").innerHTML = 'mob';
        return 'Enter Your New Phone Number';
    }
    else if (input == "No  ") {
        if(document.getElementById("demo2").innerHTML == 'no')
        {
            document.getElementById("demo2").innerHTML = '';
            return 'Thanks for your time';
        }
        else
        {
            return 'Your Shipment Address after update is : ' + document.getElementById('demoadd').innerHTML.slice(0,-5);
        }
    }
    else if (document.getElementById("demo2").innerHTML == 'mob') {
        document.getElementById("demo2").innerHTML = '';
        document.getElementById("demonum1").innerHTML = input;
        document.getElementById("demonum").innerHTML = input;
        return 'Do you want to add another Phone number?<br><button class="botText buttonstyle" onclick="yesnum2();getResponse()">Yes</button><button class="botText buttonstyle" onclick="nonum2();getResponse()">No</button>';
    }

    else if (input == "No   ") {
        editnum();
        return 'Mobile phone is updated Successfully<br><br>Your Shipment Address after update is : ' + document.getElementById('demoadd').innerHTML.slice(0,-5) + '<br>Your Mobile number after update is : ' + document.getElementById('demonum').innerHTML;
    }

    else if (input == "Yes   ") {
        document.getElementById("demo2").innerHTML = 'mob2';
        return 'Enter your new mobile number';
    }

    else if (document.getElementById("demo2").innerHTML == 'mob2') {
        document.getElementById("demonum2").innerHTML = input;
        document.getElementById("demonum").innerHTML = document.getElementById("demonum1").innerHTML  + ' - ' + document.getElementById("demonum2").innerHTML;
        editnum();
        return 'Mobile phone is updated Successfully<br><br>Your Shipment Address after update is : ' + document.getElementById('demoadd').innerHTML.slice(0,-5) + '<br>Your Mobile number after update is : ' + document.getElementById('demonum').innerHTML;
    }

    else if (input == "Confirm Phone Number") {
        document.getElementById("demo2").innerHTML = '';
        editnum();
        return 'done';
    }

    else if (input == "Edit Phone Number") {
        return "Enter Your New Phone Number";
    }




    else {
        return "I can not understand what you want";
    }
}

function yes() {
    document.getElementById("textInput").value = "Yes";
    return document.getElementById("textInput").value;
}

function no() {
    document.getElementById("textInput").value = "No";
    return document.getElementById("textInput").value;
}


function yes2() {
    document.getElementById("textInput").value = "نعم";
    return document.getElementById("textInput").value;
}

function no2() {
    document.getElementById("textInput").value = "لا";
    return document.getElementById("textInput").value;
}

function yesfloor() {
    document.getElementById("textInput").value = "Yes ";
    return document.getElementById("textInput").value;
}

function nofloor() {
    document.getElementById("textInput").value = "No ";
    return document.getElementById("textInput").value;
}

function yesfloor2() {
    document.getElementById("textInput").value = "نعم ";
    return document.getElementById("textInput").value;
}

function nofloor2() {
    document.getElementById("textInput").value = "لا ";
    return document.getElementById("textInput").value;
}

function confirmaddress() {
    document.getElementById("textInput").value = "Confirm Address";
    return document.getElementById("textInput").value;
}

function editaddress() {
    document.getElementById("textInput").value = "Edit Address";
    return document.getElementById("textInput").value;
}

function confirmaddress2() {
    document.getElementById("textInput").value = "تأكيد العنوان";
    return document.getElementById("textInput").value;
}

function editaddress2() {
    document.getElementById("textInput").value = "تعديل العنوان";
    return document.getElementById("textInput").value;
}

function yesnum() {
    document.getElementById("textInput").value = "Yes  ";
    return document.getElementById("textInput").value;
}

function nonum() {
    document.getElementById("textInput").value = "No  ";
    return document.getElementById("textInput").value;
}

function yesnum3() {
    document.getElementById("textInput").value = "نعم  ";
    return document.getElementById("textInput").value;
}

function nonum3() {
    document.getElementById("textInput").value = "لا  ";
    return document.getElementById("textInput").value;
}

function yesnum4() {
    document.getElementById("textInput").value = "نعم   ";
    return document.getElementById("textInput").value;
}

function nonum4() {
    document.getElementById("textInput").value = "لا   ";
    return document.getElementById("textInput").value;
}

function yesnum2() {
    document.getElementById("textInput").value = "Yes   ";
    return document.getElementById("textInput").value;
}

function nonum2() {
    document.getElementById("textInput").value = "No   ";
    return document.getElementById("textInput").value;
}

function confirmnumber() {
    document.getElementById("textInput").value = "Confirm Phone Number";
    return document.getElementById("textInput").value;
}

function editnumber() {
    document.getElementById("textInput").value = "Edit Phone Number";
    return document.getElementById("textInput").value;
}
















function English() {
    document.getElementById("textInput").value = "English";
    return document.getElementById("textInput").value;
}

function Arabic() {
    document.getElementById("textInput").value = "عربى";
    return document.getElementById("textInput").value;
}


//English
function Branch() {
    document.getElementById("textInput").value = "Find Nearest Branch";
    return document.getElementById("textInput").value;
}

function Trace() {
    document.getElementById("textInput").value = "Trace Your Shipment";
    return document.getElementById("textInput").value;
}

function req() {
    document.getElementById("textInput").value = "Request a Pickup";
    return document.getElementById("textInput").value;
}

function Confirm() {
    document.getElementById("textInput").value = "Confirm Shipment Data";
    return document.getElementById("textInput").value;
}

function Contact() {
    document.getElementById("textInput").value = "Contact Us";
    return document.getElementById("textInput").value;
}

function Messa() {
    document.getElementById("textInput").value = "Send a Message";
    return document.getElementById("textInput").value;
}

function Price() {
    document.getElementById("textInput").value = "Calculate Price";
    return document.getElementById("textInput").value;
}



//Arabic
function Branch2() {
    document.getElementById("textInput").value = "اقرب فرع";
    return document.getElementById("textInput").value;
}

function Trace2() {
    document.getElementById("textInput").value = "تتبع شحنتك";
    return document.getElementById("textInput").value;
}

function req2() {
    document.getElementById("textInput").value = "طلب رفع بيكاب";
    return document.getElementById("textInput").value;
}

function Confirm2() {
    document.getElementById("textInput").value = "تأكيد بيانات الشحنة";
    return document.getElementById("textInput").value;
}

function Contact2() {
    document.getElementById("textInput").value = "التواصل معنا";
    return document.getElementById("textInput").value;
}

function Messa2() {
    document.getElementById("textInput").value = "ابعت رسالتك";
    return document.getElementById("textInput").value;
}

function Price2() {
    document.getElementById("textInput").value = "تكلفة الشحن";
    return document.getElementById("textInput").value;
}



//English
function cairo() {
    document.getElementById("textInput").value = " Cairo";
    return document.getElementById("textInput").value;
}

function alex() {
    document.getElementById("textInput").value = " Alexandria";
    return document.getElementById("textInput").value;
}

function upperegypt() {
    document.getElementById("textInput").value = " Upper Egypt";
    return document.getElementById("textInput").value;
}

function delta() {
    document.getElementById("textInput").value = " Delta";
    return document.getElementById("textInput").value;
}

function canal() {
    document.getElementById("textInput").value = " Canal";
    return document.getElementById("textInput").value;
}



//price english from

function cgreatcairo() {
    document.getElementById("textInput").value = "Great Cairo";
    return document.getElementById("textInput").value;
}

function calexandria() {
    document.getElementById("textInput").value = " Alexandria";
    return document.getElementById("textInput").value;
}

function cdelta() {
    document.getElementById("textInput").value = " Delta";
    return document.getElementById("textInput").value;
}

function ccanal() {
    document.getElementById("textInput").value = " Canal";
    return document.getElementById("textInput").value;
}

function cnupperegypt() {
    document.getElementById("textInput").value = "North UpperEgypt";
    return document.getElementById("textInput").value;
}

function cmupperegypt() {
    document.getElementById("textInput").value = "Middle UpperEgypt";
    return document.getElementById("textInput").value;
}

function csupperegypt() {
    document.getElementById("textInput").value = "South UpperEgypt";
    return document.getElementById("textInput").value;
}


//price english to

function cgreatcairoto() {
    document.getElementById("textInput").value = "Great Cairo ";
    return document.getElementById("textInput").value;
}

function calexandriato() {
    document.getElementById("textInput").value = " Alexandria ";
    return document.getElementById("textInput").value;
}

function cdeltato() {
    document.getElementById("textInput").value = " Delta ";
    return document.getElementById("textInput").value;
}

function ccanalto() {
    document.getElementById("textInput").value = " Canal ";
    return document.getElementById("textInput").value;
}

function cnupperegyptto() {
    document.getElementById("textInput").value = "North UpperEgypt ";
    return document.getElementById("textInput").value;
}

function cmupperegyptto() {
    document.getElementById("textInput").value = "Middle UpperEgypt ";
    return document.getElementById("textInput").value;
}

function csupperegyptto() {
    document.getElementById("textInput").value = "South UpperEgypt ";
    return document.getElementById("textInput").value;
}













//price From English

function cairoprice() {
    document.getElementById("textInput").value = "Cairo ";
    return document.getElementById("textInput").value;
}

function alexprice() {
    document.getElementById("textInput").value = "Alexandria ";
    return document.getElementById("textInput").value;
}

function minyaprice() {
    document.getElementById("textInput").value = "Minya ";
    return document.getElementById("textInput").value;
}

function aswanprice() {
    document.getElementById("textInput").value = "Aswan ";
    return document.getElementById("textInput").value;
}

function asyutprice() {
    document.getElementById("textInput").value = "Asyut ";
    return document.getElementById("textInput").value;
}


function beheiraprice() {
    document.getElementById("textInput").value = "Beheira ";
    return document.getElementById("textInput").value;
}

function benisuefprice() {
    document.getElementById("textInput").value = "Beni Suef ";
    return document.getElementById("textInput").value;
}

function dakahliaprice() {
    document.getElementById("textInput").value = "Dakahlia ";
    return document.getElementById("textInput").value;
}

function damiettaprice() {
    document.getElementById("textInput").value = "Damietta ";
    return document.getElementById("textInput").value;
}

function faiyumprice() {
    document.getElementById("textInput").value = "Faiyum ";
    return document.getElementById("textInput").value;
}

function gharbiaprice() {
    document.getElementById("textInput").value = "Gharbia ";
    return document.getElementById("textInput").value;
}

function gizaprice() {
    document.getElementById("textInput").value = "Giza ";
    return document.getElementById("textInput").value;
}

function ismailiaprice() {
    document.getElementById("textInput").value = "Ismailia ";
    return document.getElementById("textInput").value;
}

function kafrelsheikhprice() {
    document.getElementById("textInput").value = "Kafr El Sheikh ";
    return document.getElementById("textInput").value;
}

function luxorprice() {
    document.getElementById("textInput").value = "Luxor ";
    return document.getElementById("textInput").value;
}

function matruhprice() {
    document.getElementById("textInput").value = "Matruh ";
    return document.getElementById("textInput").value;
}

function monufiaprice() {
    document.getElementById("textInput").value = "Monufia ";
    return document.getElementById("textInput").value;
}

function newvalleyprice() {
    document.getElementById("textInput").value = "New Valley ";
    return document.getElementById("textInput").value;
}

function northsinaiprice() {
    document.getElementById("textInput").value = "North Sinai ";
    return document.getElementById("textInput").value;
}

function portsaidprice() {
    document.getElementById("textInput").value = "Port Said ";
    return document.getElementById("textInput").value;
}

function qalyubiaprice() {
    document.getElementById("textInput").value = "Qalyubia ";
    return document.getElementById("textInput").value;
}

function qenaprice() {
    document.getElementById("textInput").value = "Qena ";
    return document.getElementById("textInput").value;
}

function redseaprice() {
    document.getElementById("textInput").value = "Red Sea ";
    return document.getElementById("textInput").value;
}

function sohagprice() {
    document.getElementById("textInput").value = "Sohag ";
    return document.getElementById("textInput").value;
}

function southsinaiprice() {
    document.getElementById("textInput").value = "South Sinai ";
    return document.getElementById("textInput").value;
}

function suezprice() {
    document.getElementById("textInput").value = "Suez ";
    return document.getElementById("textInput").value;
}







//price english to

function cairopriceto() {
    document.getElementById("textInput").value = "Cairo  ";
    return document.getElementById("textInput").value;
}

function alexpriceto() {
    document.getElementById("textInput").value = "Alexandria  ";
    return document.getElementById("textInput").value;
}

function minyapriceto() {
    document.getElementById("textInput").value = "Minya  ";
    return document.getElementById("textInput").value;
}

function aswanpriceto() {
    document.getElementById("textInput").value = "Aswan  ";
    return document.getElementById("textInput").value;
}

function asyutpriceto() {
    document.getElementById("textInput").value = "Asyut  ";
    return document.getElementById("textInput").value;
}


function beheirapriceto() {
    document.getElementById("textInput").value = "Beheira  ";
    return document.getElementById("textInput").value;
}

function benisuefpriceto() {
    document.getElementById("textInput").value = "Beni Suef  ";
    return document.getElementById("textInput").value;
}

function dakahliapriceto() {
    document.getElementById("textInput").value = "Dakahlia  ";
    return document.getElementById("textInput").value;
}

function damiettapriceto() {
    document.getElementById("textInput").value = "Damietta  ";
    return document.getElementById("textInput").value;
}

function faiyumpriceto() {
    document.getElementById("textInput").value = "Faiyum  ";
    return document.getElementById("textInput").value;
}

function gharbiapriceto() {
    document.getElementById("textInput").value = "Gharbia  ";
    return document.getElementById("textInput").value;
}

function gizapriceto() {
    document.getElementById("textInput").value = "Giza  ";
    return document.getElementById("textInput").value;
}

function ismailiapriceto() {
    document.getElementById("textInput").value = "Ismailia  ";
    return document.getElementById("textInput").value;
}

function kafrelsheikhpriceto() {
    document.getElementById("textInput").value = "Kafr El Sheikh  ";
    return document.getElementById("textInput").value;
}

function luxorpriceto() {
    document.getElementById("textInput").value = "Luxor  ";
    return document.getElementById("textInput").value;
}

function matruhpriceto() {
    document.getElementById("textInput").value = "Matruh  ";
    return document.getElementById("textInput").value;
}

function monufiapriceto() {
    document.getElementById("textInput").value = "Monufia  ";
    return document.getElementById("textInput").value;
}

function newvalleypriceto() {
    document.getElementById("textInput").value = "New Valley  ";
    return document.getElementById("textInput").value;
}

function northsinaipriceto() {
    document.getElementById("textInput").value = "North Sinai  ";
    return document.getElementById("textInput").value;
}

function portsaidpriceto() {
    document.getElementById("textInput").value = "Port Said  ";
    return document.getElementById("textInput").value;
}

function qalyubiapriceto() {
    document.getElementById("textInput").value = "Qalyubia  ";
    return document.getElementById("textInput").value;
}

function qenapriceto() {
    document.getElementById("textInput").value = "Qena  ";
    return document.getElementById("textInput").value;
}

function redseapriceto() {
    document.getElementById("textInput").value = "Red Sea  ";
    return document.getElementById("textInput").value;
}

function sohagpriceto() {
    document.getElementById("textInput").value = "Sohag  ";
    return document.getElementById("textInput").value;
}

function southsinaipriceto() {
    document.getElementById("textInput").value = "South Sinai  ";
    return document.getElementById("textInput").value;
}

function suezpriceto() {
    document.getElementById("textInput").value = "Suez  ";
    return document.getElementById("textInput").value;
}















//Arabic
function cairo2() {
    document.getElementById("textInput").value = " القاهرة ";
    return document.getElementById("textInput").value;
}

function alex2() {
    document.getElementById("textInput").value = " الاسكندرية ";
    return document.getElementById("textInput").value;
}

function upperegypt2() {
    document.getElementById("textInput").value = "الصعيد";
    return document.getElementById("textInput").value;
}

function delta2() {
    document.getElementById("textInput").value = "الدلتا";
    return document.getElementById("textInput").value;
}

function canal2() {
    document.getElementById("textInput").value = "القناة";
    return document.getElementById("textInput").value;
}


//English
function conf() {
    document.getElementById("textInput").value = "Confirm Shipment Number";
    return document.getElementById("textInput").value;
}

function edit() {
    document.getElementById("textInput").value = "Edit Shipment Number";
    return document.getElementById("textInput").value;
}



//Arabic
function conf2() {
    document.getElementById("textInput").value = "تأكيد رقم الشحنة";
    return document.getElementById("textInput").value;
}

function edit2() {
    document.getElementById("textInput").value = "تعديل رقم الشحنة";
    return document.getElementById("textInput").value;
}




document.getElementById("From").style.visibility = "hidden";
document.getElementById("To").style.visibility = "hidden";

var otpcode=null;

function myFunction(input) {
    async function getUsers() {

        let response = await fetch("https://absegy.org/ABSAPI/api/Free/V2/GetShipmentHistory/" + input);


        let data = await response.json();
        var test = (data.ShipmentInfo.StatusName);
        var test2 = (data.ShipmentInfo.PickupDate);
        var test3 = (data.HistoryData[data.HistoryData.length - 1].ActionDate);
        var test4 = (data.ShipmentInfo.ToAddress);
        var test5 = (data.ShipmentInfo.Data9);
        document.getElementById("demo").innerHTML = 'Your shipment (' + input + ') is ' + test + '<br>PickupDate : ' + test2 + '<br>Last Update : ' + test3 + '<br> Address : ' + test4 + '';
        otpcode = test5;
        return data;
    }
    getUsers();
}



async function editadd() {
    const addr = document.getElementById('demoadd').innerHTML;
    const SC = "D52FFDD2-90EE-4DBE-81EF-51F55BEFA1CE";
    const ship = document.getElementById('demoship').innerHTML;
    const data = { "securityCode": SC, "awb": ship, "address": addr };
    console.log(data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('https://apicore.absegy.org/api/ClientUsers/V5/ChatBot/UpdateAddress', options).then(response => {
        console.log(response);
    });
}


async function editnum() {
    const num = document.getElementById('demonum').innerHTML;
    const SC = "D52FFDD2-90EE-4DBE-81EF-51F55BEFA1CE";
    const ship = document.getElementById('demoship').innerHTML;
    const data = { "securityCode": SC, "awb": ship, "telephone": num };
    //console.log(data);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('https://apicore.absegy.org/api/ClientUsers/V5/ChatBot/UpdateTelephone', options).then(response => {
        console.log(response);
    });
}

function topFunction() {
    document.documentElement.scrollTop = 0;
  }