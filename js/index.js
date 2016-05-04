window.onload=function(){
	var as=getClass("lunbo")[0].getElementsByTagName('a');
	//console.log(as);
	var btns=getClass('btn')[0].getElementsByTagName('li');
	//console.log(btns)
	var index=0;
	t=setInterval(lunbo,1000)
	function lunbo(){
		index++;
		if(index>as.length-1){
			index=0;
		}
		for(var i=0;i<as.length;i++){
			as[i].style.zIndex="0";
			btns[i].style.background=""
		}
		as[index].style.zIndex="99"
		btns[index].style.background="#fff"
	}
	for(var i=0;i<btns.length;i++){
		btns[i].ss=i;
		//console.log(i)
		btns[i].onclick=function(){
			for(var j=0;j<btns.length;j++){
				as[j].style.zIndex="0";
			    btns[j].style.background=""
			}
			as[this.ss].style.zIndex="99"
		    this.style.background="#fff"
		}
	}
var wbox=getClass('w-box')[0];
wbox.onmouseover=function(){
	clearInterval(t);
}
wbox.onmouseout=function(){
	t=setInterval(lunbo,1000)
}
var leftbtn=getClass("btn2left")[0];
var rightbtn=getClass("btn2right")[0];
leftbtn.onclick=function(){
	index--;
		if(index==-1){
			index=as.length-1;
		}
		for(var i=0;i<as.length;i++){
			as[i].style.zIndex="0";
			btns[i].style.background=""
		}
		as[index].style.zIndex="99"
		btns[index].style.background="red"
}
rightbtn.onclick=function(){
	lunbo();
}
//热门品牌
	/*var links=getClass('dpright')[0].getElementsByTagName('a');
          // console.log(links)
	var divs=getClass('dp-box')[0].getElementsByClassName('dp-right');
	//console.log(divs)
	for(var i=0;i<links.length;i++){
		links[i].aa=i;
		links[i].onmouseover=function(){
		    //console.log(this.aa)
			for(var j=0;j<divs.length;j++){
				divs[j].style.display="none";
			}
				divs[this.aa].style.display="block"
		}
	}

*/

}


