/*global collectSameElements*/
'use strict';

describe('practice-1-1', () => {

  const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  const collectionB = ['a', 'd', 'e', 'f'];
  function collectSameElements(collection1, collection1){
  var result=[];
  var longA=collection1.length;
  var longB=collection2.length;
  for(let i=0;i<longA;i++)
  for(let j=0;j<longB;j++){
  if(collection1[i]==collection2[j])
  result.push(collection1[i];)}
  return result;
  }

  it('选出A集合中与B集合中相同的元素', () => {

    const result = collectSameElements(collectionA, collectionB);

    expect(result).toEqual(['a', 'e', 'f', 'd']);
  });
});
