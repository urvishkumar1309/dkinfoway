export const titleAnim={
    hidden:{
        y:-200,
        opacity:0,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.75,
            ease:"easeOut",
            when:"beforeChildren",
            staggerChildren:1,
        }
    }
}
export const fade={
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:{
            duration:1.5,
            ease:"easeOut",
        }
    }
}
export const imageAnim={
    hidden:{
        opacity:0,
        scale:1.5,
        x:50
    },
    show:{
        x:0,
        opacity:1,
        scale:1,
        transition:{
            duration:0.75,
            ease:"easeOut",
            delay:0.7
        }
    }
}
export const cardAnim={
    hidden:{
        y:-200,
        opacity:0,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.3,
            ease:"easeOut",
            when:"beforeChildren",
            
            }
    }
}
export const titleAnim2={
    hidden:{
        y:200,
        opacity:0,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.75,
            ease:"easeOut",
            staggerChildren:1,
            
        }
    }
}