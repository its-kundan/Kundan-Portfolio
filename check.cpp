body {
    margin: 0px;
}

#hd {
    height: 65vh;
    background-image: url("images/macbook_mouse.jpg");
    /* background-color: red; */
    background-position: center;
    opacity: 0.8;
    background-attachment: fixed;



}

.ul {
    list-style: none;
    padding-left: 0px;
    text-align: center;
    margin: 0px;

}

.ul li {
    display: inline-block;

    padding: 0px 80px 80px 0px;
    font-size: 1.5rem;
    text-align: center;


}

.ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    /* perticular effct slow karne ke liye  */
    transition: color 0.5s, border-bottom 1s;

}

.hover li a:hover {
    color: red;
    border-bottom: 4px solid hsl(0, 0%, 100%);

}

#he {
    color: white;
    text-align: center;
    font-size: 5rem;
    font-weight: bolder;
    margin-bottom: 0.5rem;
}

.socialicons ul li a img {
    /* padding: 20pxpx; */
    /* font-size: 1rem; */
    /* text-align: center; */
    /* margin:0px ; */
    /* margin-left: 10px; */
    padding-left: 10px;
    /* border-radius: 10%; */
    height: 30px;
    width: 30px;
}

/* .socialicons li a img:hover{ */
/* box-shadow: 0px 0px 2px 2px red; */
/* } */

/* border: 2px solid red; */
/* border-radius: 20px; */
/* text-align: center; */
/* margin: 10px 100px 1000px 300px; */
/* padding: 100px 100px 100px 100px; */
/* padding: 8px; */
/* border */
/*  */
/* } */
.myimage {
    position: relative;
    height: 15rem;
    width: 15rem;
    margin: auto;
    margin-top: -12vh;




}

.myimage img {
    height: 100%;
    width: 100%;
    border-radius: 400px;
    border: 4px solid rgb(252, 249, 249);
}

.myimage img:hover {
    box-shadow: 0px 0px 6px 4px rgb(238, 12, 12);
}

.address {
    margin: 30px 220px 90px 220px;
    font-size: xx-large;

}

.address p {
    line-height: 40px;
    word-spacing: 10px;
    text-align: center;
}

.section-heading {
    text-align: center;
    font-size: 3rem;
    margin-top: 2px;
    color: rgba(223, 247, 12, 0.801);
}

#skills {
    margin-top: -20px;
}

section {
    width: 100%;
    display: flex;
    /* height: 75vh; */
    flex-direction: column;
    align-items: center;
}

section:nth-child(2n) {
    background-color: pink;
}

section:nth-child(2n+1) {
    background-color: white;
}

.skills-display {
    margin: 0px;
    padding: 0px;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* border: 4px solid white; */
}

.skill-progress {
    width: 10rem;
    height: 1.8rem;
    background-color: grey;
    border-radius: 0.8rem;
    border: 2px solid balck; 
    /* padding: 20px; */
}

.percent-clrs {
    width: 85%;
    height: inherit;
    background-color: blue;
}

.skill-name span {
    color: white;
    font-size: 1rem;
    margin-left: 5px;
}

.skill-progress>div {
    border-radius: 20px 0px 0px 20px;
}

.formargin {
    padding: 0px 0px 0px 0px;
    margin: 0px;
    margin-top: 40px;
    justify-content: space-around;


}