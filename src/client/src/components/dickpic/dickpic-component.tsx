import styles from ".//dickpic.module.scss";
import React from "react";
import { ClassSelectComponent } from "../../components/class-select/class-select-component";

export const DickPicComponent = () => {

    if (ClassSelectComponent[0].selected){

        return (

            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/coloricons/50/50X50-10-256.png"/>
            </div>
        )
    }

else if (ClassSelectComponent[1].selected){

        return (

            <div>
                <img src="https://cdn3.iconfinder.com/data/icons/systematrix/WoW.png"/>
            </div>
        )
    }

else if (ClassSelectComponent[2].selected){

        return (

            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/coloricons/50/50X50-12-256.png"/>
            </div>
        )
    }

    else {

        return (

            <div>
                <img src="https://cdn4.iconfinder.com/data/icons/smashicons-game-flat/60/41_-_For_the_Horde_Flat-256.png"/>
            </div>
        )
    }
};