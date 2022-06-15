export const TextInput = ({value, onChange, placeholder='' }) => {
    const id = Math.random().toString();
    return (
    <div class="input-group mb-3">
        <span className="input-group-text" id={id}>@</span>
        <input 
        type="text" 
        className="form-control" 
        id={id}
        placeholder={placeholder}
        name="filterTerm"
        value={value}
        onChange={onChange}
        />
    </div>
    )
}