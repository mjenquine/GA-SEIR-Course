# Review Continued

## Let's add some 'data'

We'll be getting data out of a file and

- `touch src/data.js`
- copy paste the following

```js
const playlist = [
  {
    artist: 'Talking Heads',
    title: 'Once in a Lifetime',
    time: '3:37'
  },
  {
    artist: 'The Clash',
    title: 'Lost in the Supermarket',
    time: '3:44'
  },
  {
    artist: 'Peter Gabriel',
    title: 'Shaking the Tree',
    time: '7:24'
  },
  {
    artist: 'Slowdive',
    title: "Don't Know Why",
    time: '4:42'
  },
  {
    artist: 'Joanna Serrat',
    title: "Keep on Fallin'",
    time: '4:47'
  },
  {
    artist: 'Wolf Parade',
    title: 'Little Golden Age',
    time: '3:44'
  },
  {
    artist: 'Dead Sara',
    title: 'Something Good',
    time: '4:39'
  },
  {
    artist: 'Chaka Khan',
    title: 'Like Sugar',
    time: '4:01'
  },
  {
    artist: 'Alvvays',
    title: 'Lollipop (Ode to Jim)',
    time: '4:39'
  },
  {
    artist: 'Mazzy Star',
    title: 'Flowers in December',
    time: '4:23'
  }
]

export default playlist
```

- add `export default playlist` at the bottom of this file

- in `App.js` add

```js
import playlist from './data.js'
console.table(playlist)
```

Thought question: where will we see this console log?

Thought question: does this app component have state yet? Let's check our dev tools

![](https://i.imgur.com/FUpgqbP.png)

Create a constructor in App and Add to State

```js
constructor(props) {
  super(props)
  this.state = {
    playlist: playlist
  }
}
```

check your browser's React dev tools console to see the 'data' in state

![](https://i.imgur.com/wAxMORz.png)

Looking at our mockup we want to put this data in our table. Remove all but one `tr` in the `tbody`

Let's loop through our playlist and add rows for each song

```js
<tbody>
  {this.state.playlist.map(song => {
    return (
      <tr>
        <td>Song</td>
        <td>Artist</td>
        <td>Time</td>
      </tr>
    )
  })}
</tbody>
```

Uh-oh we get an error:

![](https://i.imgur.com/RjCFPbe.png)

Create React App is going to keep giving us errors and warnings to be sure we're following best practices. Let's do what it says this time and add a (not really reliable) unique key. Since this is fake data from an array we can just use the array index position for now - when you use data you could use the `id`. This isn't a foolproof way to add a unique key because index positions can change. Again, once we start using real data we can use the `id`. It is ok to not fix this since it is a warning. You can keep building the app.

Let's fix the warning and update our data to now show the actual song info

```js
<tbody>
  {this.state.playlists.songs.map((song, index) => {
    return (
      <tr key={index}>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.time}</td>
      </tr>
    )
  })}
</tbody>
```
