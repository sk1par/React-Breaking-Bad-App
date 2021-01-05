import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ isLoading, items }) => {
    return isLoading ? (
        <Spinner />
    ) : (
            <section className='cards'>
                {items.map(item => (
                    <CharacterItem item={item} key={item.char_id} />
                ))}
            </section>
        )
}

export default CharacterGrid
