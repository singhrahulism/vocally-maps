import { darkMap } from '../../data/darkMap'

// Light Theme

const MAP_STYLE_LIGHT = []

const SEARCH_BAR_BACKGROUND_LIGHT = 'white'
const SEARCH_BAR_ICON_LIGHT = '#aeaeae'
const SEARCH_BAR_TEXT_INPUT_LIGHT = 'black'
const SEARCH_BAR_TEXT_INPUT_PLACEHOLDER_LIGHT = '#black'

const SEARCH_HISTORY_BACKGROUND_LIGHT = 'white'
const SEARCH_HISTORY_TITLE_LIGHT = 'black'

const SINGLE_HISTORY_ICON_LIGHT = 'black'
const SINGLE_HISTORY_TEXT_LIGHT = 'black'

const ACTION_ICON_BACKGROUND_LIGHT = 'white'
const ACTION_ICON_IMAGE_LIGHT = require('../../../assets/toggleBlack.png')
const ACTION_ICON_ICON_LIGHT = 'black'

const BOTTOM_CARD_BACKGROUND_LIGHT = 'white'
const BOTTOM_CARD_TITLE_LIGHT = 'black'
const BOTTOM_CARD_SUBTITLE_LIGHT = 'black'

const FOOTER_BACKGROUND_LIGHT = 'white'
const FOOTER_ICON_LIGHT = 'black'


// Dark Theme

const MAP_STYLE_DARK = darkMap

const SEARCH_BAR_BACKGROUND_DARK = '#333333'
const SEARCH_BAR_ICON_DARK = '#aeaeae'
const SEARCH_BAR_TEXT_INPUT_DARK = '#aeaeae'
const SEARCH_BAR_TEXT_INPUT_PLACEHOLDER_DARK = '#aeaeae'

const SEARCH_HISTORY_BACKGROUND_DARK = '#3e3e3e'
const SEARCH_HISTORY_TITLE_DARK = 'white'

const SINGLE_HISTORY_ICON_DARK = 'white'
const SINGLE_HISTORY_TEXT_DARK = 'white'

const ACTION_ICON_BACKGROUND_DARK = '#434343'
const ACTION_ICON_IMAGE_DARK = require('../../../assets/toggleWhite.png')
const ACTION_ICON_ICON_DARK = 'white'

const BOTTOM_CARD_BACKGROUND_DARK = '#333333'
const BOTTOM_CARD_TITLE_DARK = 'white'
const BOTTOM_CARD_SUBTITLE_DARK = '#828282'

const FOOTER_BACKGROUND_DARK = 'black'
const FOOTER_ICON_DARK = 'white'

const color = (theme) => {
    return {
        MAP_STYLE                         : theme ? MAP_STYLE_DARK                         : MAP_STYLE_LIGHT,
        SEARCH_BAR_BACKGROUND             : theme ? SEARCH_BAR_BACKGROUND_DARK             : SEARCH_BAR_BACKGROUND_LIGHT,
        SEARCH_BAR_ICON                   : theme ? SEARCH_BAR_ICON_DARK                   : SEARCH_BAR_ICON_LIGHT,
        SEARCH_BAR_TEXT_INPUT             : theme ? SEARCH_BAR_TEXT_INPUT_DARK             : SEARCH_BAR_TEXT_INPUT_LIGHT,
        SEARCH_BAR_TEXT_INPUT_PLACEHOLDER : theme ? SEARCH_BAR_TEXT_INPUT_PLACEHOLDER_DARK : SEARCH_BAR_TEXT_INPUT_PLACEHOLDER_LIGHT,
        SEARCH_HISTORY_BACKGROUND         : theme ? SEARCH_HISTORY_BACKGROUND_DARK         : SEARCH_HISTORY_BACKGROUND_LIGHT,
        SEARCH_HISTORY_TITLE              : theme ? SEARCH_HISTORY_TITLE_DARK              : SEARCH_HISTORY_TITLE_LIGHT,
        SINGLE_HISTORY_ICON               : theme ? SINGLE_HISTORY_ICON_DARK               : SINGLE_HISTORY_ICON_LIGHT,
        SINGLE_HISTORY_TEXT               : theme ? SINGLE_HISTORY_TEXT_DARK               : SINGLE_HISTORY_TEXT_LIGHT,
        ACTION_ICON_BACKGROUND            : theme ? ACTION_ICON_BACKGROUND_DARK            : ACTION_ICON_BACKGROUND_LIGHT,
        ACTION_ICON_IMAGE                 : theme ? ACTION_ICON_IMAGE_DARK                 : ACTION_ICON_IMAGE_LIGHT,
        ACTION_ICON_ICON                  : theme ? ACTION_ICON_ICON_DARK                  : ACTION_ICON_ICON_LIGHT,
        BOTTOM_CARD_BACKGROUND            : theme ? BOTTOM_CARD_BACKGROUND_DARK            : BOTTOM_CARD_BACKGROUND_LIGHT,
        BOTTOM_CARD_TITLE                 : theme ? BOTTOM_CARD_TITLE_DARK                 : BOTTOM_CARD_TITLE_LIGHT,
        BOTTOM_CARD_SUBTITLE              : theme ? BOTTOM_CARD_SUBTITLE_DARK              : BOTTOM_CARD_SUBTITLE_LIGHT,
        FOOTER_BACKGROUND                 : theme ? FOOTER_BACKGROUND_DARK                 : FOOTER_BACKGROUND_LIGHT,
        FOOTER_ICON                       : theme ? FOOTER_ICON_DARK                       : FOOTER_ICON_LIGHT
    }
}

export const getTheme = (theme) => {
    return color(theme)
}
