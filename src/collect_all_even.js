'use strict';

function collect_all_even(collection) {
  var evens=[]
  var patt = /\d*[0,2,4,6,8]-/g;
  var result=collection.join('-').match(patt);
  for(var i=0;i<result.length;i++){
  	evens.push(parseInt(result[i]));
  	}
  return evens;
}

module.exports = collect_all_even;
