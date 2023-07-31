# Contribute to Stackticon

We are open to all kinds of contributing. Here are some guidelines for helping you with contributing:

- Set up project
- Issues or Bugs
- Feature requests
- Add Icons
- Commit guidelines

## Set up projects

### Environments

| Package    | Version |
| :--------- | :------ |
| Node       | 18.13.0 |
| React      | 18.2.0  |
| Typescript | 4.9.5   |

### install packages

```shell
yarn install
```

### start project in local

```shell
yarn start
```

## Found Bugs?

If you find any bug or awkward point, please let us know about issue with [submitting issue](https://github.com/msdio/stackticon/issues). You can further make Pull requests with a fix!

### Submitting issue

You can report issue with [template](https://github.com/msdio/stackticon/issues/new?assignees=msdio&labels=bug&projects=&template=bug_report.md&title=)

## Feature Request

If you have something to propose about our new feature, feel free to tell us with [feature request](https://github.com/msdio/stackticon/issues/new?assignees=author&labels=&projects=&template=new_feature.md&title=)

## Add Icons

Adding icons is the easiest way to contribute to our project. All our icons are `svg`, so you can add info about icon in [src > constants > custom-icons.json](https://github.com/msdio/stackticon/blob/main/src/constants/custom-icons.json).

You can add icon info with following:

```json
{
  "title": "React Router",
  "slug": "reactRouter",
  "hex": "3174b9",
  "path": "M58.33 101.79C29.54 101.79 17 99.42 0 ...",
  "viewBox": "0 0 110 145"
}
```

- `title`: Every word should start with capital letter.
- `slug`: Same as title, but in small letters, without spaces. `ex) twowords`
- `hex`: Color of svg, please write without #.
- `path`: Path of svg.
- `viewBox`: ViewBox of svg.

## Commit guidelines

```
<type>: <message>
```

### Example

```
docs: add contribution guide on CONTRIBUTING.md
```

### Type

Must be one of the following:

- **feat**: New feature
- **fix**: Fixing bugs
- **style**: Changes with styling, layout or formatting codes
- **refactor**: Change codes that but neither fix bugs nor add features
- **icon**: Adding icons
- **remove**: Removing not using codes, assets, tests, etc
- **build**: Changes related to build, dependencies, release versoning
- **docs**: Documentation changes
- **test**: Add or correct tests

### Message

Subscribe what you've done.
