# Dropdown Selector

Make a component that displays a pokemon type dropdown. Once the type is selected,
another dropdown will appear allowing the player to choose a pokemon of that type.
The player will confirm their selection via a button click.

```
[type] [pokemon-of-type] [confirm-button]
```

## Technical considerations

This component will make an api call to generate the list for the `pokemon-of-type` dropdown.
The data will not be sent to the `store`.

Once the pokemon-of-type is selected and the player presses the button, then the button press will
dispatch the Redux thunk action fetchMob{One,Two}.
