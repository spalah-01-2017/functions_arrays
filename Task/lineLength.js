function lineLength(point1,point2){
	return Math.sqrt((point2[0]-point1[0])*(point2[0]-point1[0])+(point2[1]-point1[1])*(point2[1]-point1[1]));
}

lineLength([1,3], [5,5]);