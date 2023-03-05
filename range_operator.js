const abc = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'

console.log(abc.match(/[a-z]/g))

// sem range operator
console.log(abc.match(/[abcdefg]/g))
// com range operator
console.log(abc.match(/[a-g]/g))

const slugs = 'Pereira, Cunha, Moreira, Fonseca, Ferreira, Lopes, Alexandrino, Silva, Macieira'

console.log(slugs.match(/[a-hA-H]/g))

const example = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'

// mesmo exemplo abaixo
console.log(example.match(/[a-zA-Z0-9]/g))
console.log(example.match(/[A-Z0-9]/gi))
