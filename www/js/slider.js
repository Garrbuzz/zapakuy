window.onload = function(){
	var slider = function(element){
		let mainElem = document.querySelector(element);
		let sliderWrapper =  mainElem.querySelector('.slider-wrapper');
		let sliderItem = mainElem.querySelectorAll('.slider-item');
		let sliderControlLeft = mainElem.querySelector('.slider-control-left');
		let sliderControlRight = mainElem.querySelector('.slider-control-right');
		console.log(sliderControlLeft.innerHTML);
		var i = 0;
		let transformLeft = function(){
			
			if (i<(sliderItem.length-1)){
				sliderWrapper.style.transform = 'translateX(-'+100*(i+1)+'%)';
				i++;
			}
			console.log(i);

		}
		let transformRight = function(){
			
			if (i!==0) {
				i--;
				sliderWrapper.style.transform = 'translateX(-'+100*i+'%)';
				
			}
			console.log(i);
		}
		
		sliderControlLeft.onclick = function(){
			
			transformLeft();
			
		}
		sliderControlRight.onclick = function(){
			
			transformRight();
		}
	}
	slider('.slider');

}