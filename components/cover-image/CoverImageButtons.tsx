import { ChangeCoverButton, RemoveCoverButton } from "./buttons"

interface CoverImageButtonsProps {
    imageUrl?: string | null
}

const CoverImageButtons = ({ imageUrl }: CoverImageButtonsProps) => {
    return (
        <div className="absolute right-5 bottom-5 flex items-center gap-x-2 opacity-0 group-hover:opacity-100">
            <ChangeCoverButton imageUrl={imageUrl} />
            <RemoveCoverButton imageUrl={imageUrl} />
        </div>
    )
}

export default CoverImageButtons
