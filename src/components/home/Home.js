import React from 'react';

function Home(props) {

    // Auswertung
       
       const title = "Lucas Bäcker"    
       const frage1 = "Wie schmekt der Kaffee?"
       const antwort1 = ["gut","schlecht","gut","gut","gut","schlecht","gut","gut","gut","schlecht","soso","super"]
       let frage1_length = antwort1.length
       
       const frage2 = "Mittagsessen?"
       const antwort2 = ["Pizza","Salat","Suppe","Kuchen","Suppe","Kuchen","Pizza","Salat","Suppe"]
       let frage2_length = antwort2.length
       
       const frage3 = "Welche Stadt willst du Wohnen? "
       const antwort3 = ["Frankfurt","Berlin","Berlin","Düsseldorf","Berlin","Düsseldorf","Düsseldorf","Berlin","Düsseldorf","Köln"]
       let frage3_length = Number(antwort3.length)
       
       const frage4 = "Womit bist du hier gekommen? "
       const antwort4 = ["Auto","Auto","Zu Fuß","Fahrrad","Auto","Auto","Zu Fuß","Fahrrad","Auto","Auto","Bus","Auto","Zu Fuß","Fahrrad","Auto","Auto","Zu Fuß","Fahrrad","Auto","Auto","Bus"]
       let frage4_length = Number(antwort4.length)
       
       

       let total_waehler = Math.max(frage1_length, frage2_length, frage3_length, frage4_length) 

      

    // Frage1
    let count1 = {};
    antwort1.forEach((i)=>{
        count1[i]=(count1[i] || 0) +1
    })

    let antwort_key11 = Object.keys(count1)[0] 
    let antwort_value11 = Number( Object.values(count1)[0])
    
    let antwort_key12 = Object.keys(count1)[1] 
    let antwort_value12 = Number( Object.values(count1)[1])

    
      
    let antwort_key13 = Object.keys(count1)[2] 
    let antwort_value13 = Number( Object.values(count1)[2])

    let antwort_key14 = Object.keys(count1)[3] 
    let antwort_value14 = Number( Object.values(count1)[3])

    

    let total_value1 = Number(antwort_value11+antwort_value12+antwort_value13+antwort_value14)
    
    
    let antwort_percentage11 = antwort_value11/total_value1
    antwort_percentage11= Math.floor((antwort_percentage11)*100) + "%"
    let antwort_percentage12 = antwort_value12/total_value1
    antwort_percentage12= Math.floor((antwort_percentage12)*100) + "%"
    let antwort_percentage13 = antwort_value13/total_value1
    antwort_percentage13= Math.floor((antwort_percentage13)*100) + "%"
    let antwort_percentage14 = antwort_value14/total_value1
    antwort_percentage14= Math.floor((antwort_percentage14)*100) + "%"

    // Frage2
    let count2 = {};
    antwort2.forEach((i)=>{
        count2[i]=(count2[i] || 0) +1
    })
    
    let antwort_key21 = Object.keys(count2)[0] 
    let antwort_value21 = Object.values(count2)[0]

    let antwort_key22 = Object.keys(count2)[1] 
    let antwort_value22 = Object.values(count2)[1]
    
    let antwort_key23 = Object.keys(count2)[2] 
    let antwort_value23 = Object.values(count2)[2]

    let antwort_key24 = Object.keys(count2)[3] 
    let antwort_value24 = Object.values(count2)[3]

    let total_value2 = Number(antwort_value21+antwort_value22+antwort_value23+antwort_value24)
    
    
    let antwort_percentage21 = antwort_value21/total_value2
    antwort_percentage21= Math.floor((antwort_percentage21)*100) + "%"
    let antwort_percentage22 = antwort_value22/total_value2
    antwort_percentage22= Math.floor((antwort_percentage22)*100) + "%"
    let antwort_percentage23 = antwort_value23/total_value2
    antwort_percentage23= Math.floor((antwort_percentage23)*100) + "%"
    let antwort_percentage24 = antwort_value24/total_value2
    antwort_percentage24= Math.floor((antwort_percentage24)*100) + "%"

    // Frage3
    let count3 = {};
    antwort3.forEach((i)=>{
        count3[i]=(count3[i] || 0) +1
    })
    
    let antwort_key31 = Object.keys(count3)[0] 
    let antwort_value31 = Object.values(count3)[0]

    let antwort_key32 = Object.keys(count3)[1] 
    let antwort_value32 = Object.values(count3)[1]
    
    let antwort_key33 = Object.keys(count3)[2] 
    let antwort_value33 = Object.values(count3)[2]

    let antwort_key34 = Object.keys(count3)[3] 
    let antwort_value34 = Object.values(count3)[3]

    let total_value3 = Number(antwort_value31+antwort_value32+antwort_value33+antwort_value34)
    
    
    let antwort_percentage31 = antwort_value31/total_value3
    antwort_percentage31= Math.floor((antwort_percentage31)*100) + "%"
    let antwort_percentage32 = antwort_value32/total_value3
    antwort_percentage32= Math.floor((antwort_percentage32)*100) + "%"
    let antwort_percentage33 = antwort_value33/total_value3
    antwort_percentage33= Math.floor((antwort_percentage33)*100) + "%"
    let antwort_percentage34 = antwort_value34/total_value2
    antwort_percentage34= Math.floor((antwort_percentage34)*100) + "%"

    // Frage4
    let count4 = {};
    antwort4.forEach((i)=>{
        count4[i]=(count4[i] || 0) +1
    })
    
    let antwort_key41 = Object.keys(count4)[0] 
    let antwort_value41 = Object.values(count4)[0]

    let antwort_key42 = Object.keys(count4)[1] 
    let antwort_value42 = Object.values(count4)[1]
    
    let antwort_key43 = Object.keys(count4)[2] 
    let antwort_value43 = Object.values(count4)[2]

    let antwort_key44 = Object.keys(count4)[3] 
    let antwort_value44 = Object.values(count4)[3]

    let total_value4 = Number(antwort_value41+antwort_value42+antwort_value43+antwort_value44)
    
    
    let antwort_percentage41 = antwort_value41/total_value4
    antwort_percentage41= Math.floor((antwort_percentage41)*100) + "%"
    let antwort_percentage42 = antwort_value42/total_value4
    antwort_percentage42= Math.floor((antwort_percentage42)*100) + "%"
    let antwort_percentage43 = antwort_value43/total_value4
    antwort_percentage43= Math.floor((antwort_percentage43)*100) + "%"
    let antwort_percentage44 = antwort_value44/total_value4
    antwort_percentage44= Math.floor((antwort_percentage44)*100) + "%"

    
    return(
        <div>
            
            <h1>Auswertung für {title}</h1>
            <h2>Total Wähler für diese Umfrage ist {total_waehler}</h2>
            <h2>{frage1}</h2>
            <h2>Total Wähler: {frage1_length}</h2>
            <h3>{antwort_key11}  {antwort_value11} {antwort_percentage11}</h3>
            <h3>{antwort_key12}  {antwort_value12} {antwort_percentage12}</h3>
            <h3>{antwort_key13}  {antwort_value13} {antwort_percentage13}</h3>
            <h3>{antwort_key14}  {antwort_value14} {antwort_percentage14}</h3>

            <h2>{frage2}</h2>
            <h2>Total Wähler: {frage2_length}</h2>
            <h3>{antwort_key21}  {antwort_value21} {antwort_percentage21}</h3>
            <h3>{antwort_key22}  {antwort_value22} {antwort_percentage22}</h3>
            <h3>{antwort_key23}  {antwort_value23} {antwort_percentage23}</h3>
            <h3>{antwort_key24}  {antwort_value24} {antwort_percentage24}</h3>

            <h2>{frage3}</h2>
            <h2>Total Wähler: {frage3_length}</h2>
            <h3>{antwort_key31}  {antwort_value31} {antwort_percentage31}</h3>
            <h3>{antwort_key32}  {antwort_value32} {antwort_percentage32}</h3>
            <h3>{antwort_key33}  {antwort_value33} {antwort_percentage33}</h3>
            <h3>{antwort_key34}  {antwort_value34} {antwort_percentage34}</h3>
            
            
            <h2>{frage4}</h2>
            <h2>Total Wähler: {frage4_length}</h2>
            <h3>{antwort_key41}  {antwort_value41} {antwort_percentage41}</h3>
            <h3>{antwort_key42}  {antwort_value42} {antwort_percentage42}</h3>
            <h3>{antwort_key43}  {antwort_value43} {antwort_percentage43}</h3>
            <h3>{antwort_key44}  {antwort_value44} {antwort_percentage44}</h3>
        </div>
    )
}

export default Home;