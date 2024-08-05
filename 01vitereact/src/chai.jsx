function Chai() {
    return(
        <h2>Chai is Ready !</h2>
    )
}

export default Chai

// Two problems we faced for executing chai() function
// 1. that we cannot name '.js' in the "vite" as it is "Military" typed ruling (just a slang), compulsory to give the .jsx or .tsx extensions. ** The main reason is that they're "Components" so they force to write ".jsx" not ".js", OK 👍.

// 2. To render a component we need the name of that component starting with capital letter, in my case "chai" tag is not recognized/accepted, instead I have to name it as "Chai" where the letter 'C' is Capital. the file name can be "chai" no problem with it !, but tags and functions should be with 'C' that is First letter Capital Letter.