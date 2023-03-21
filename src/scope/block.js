function fruits(){
    if(true){
        var fruit1 = 'apple'; //El acceso solo se permite dentro function scope
        let fruit2 = 'banana'; //El acceso solo se permite dentro del bloque
        const fruit3 = 'kiwi'; //El acceso solo se permite dentro edl bloque
        console.log(fruit2); //Primero se imprime esta fruta
        console.log(fruit3); //Luego se imprime esta fruta
    }
    console.log(fruit1); //Por ultimo se imprime esta fruta
}

fruits();