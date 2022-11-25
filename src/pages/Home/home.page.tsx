import { SnackbarUtilities } from "@/utilities"


export function HomePage(){


    const handle = () => {

        SnackbarUtilities.success('funciona');
    }
    return(
        <div>

            <button onClick={handle}>test snack</button>
            hola home
        </div>
    )
}

