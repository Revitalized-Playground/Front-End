# How to use

```
<InitialAvatar 
    firstName={firstName} 
    lastName={lastName}
    height="164" 
    width="164" 
    useRandomColor={1}
    className="string"
/>
```
height and width are converted to pixels
font-size is calculated automatically based off of h x w
first and last name are strings
`useRandomColor` is optional. If you don't set a variable here, grey background with black text will be used.
className is any string which will be added to the default styled component class name(s)
