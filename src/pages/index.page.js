import React from "react"

const IndexPage = ({ textSize, translation }) => {
  const textClass = `text ${textSize}`
  const { title, abbr, copyright } = translation

  return (
    <>
      <h2 className="page-heading">Proverbs 29</h2>

      <p className="page-subheading p-b-400">
        ${title} (${abbr})
      </p>

      <div className={textClass}>
        <p>
          <strong>1</strong> My son, attend unto my wisdom, and bow thine ear to
          my understanding:
        </p>

        <p>
          <sup>2</sup> That thou mayest regard discretion, and that thy lips may
          keep knowledge.
        </p>

        <p>
          <sup>3</sup> For the lips of a strange woman drop as an honeycomb, and
          her mouth is smoother than oil:
        </p>

        <p>
          <sup>4</sup> But her end is bitter as wormwood, sharp as a two-edged
          sword.
        </p>

        <p>
          <sup>5</sup> Her feet go down to death; her steps take hold on hell.
        </p>

        <p>
          <sup>6</sup> Lest thou shouldest ponder the path of life, her ways are
          moveable, that thou canst not know them.
        </p>

        <p>
          <sup>7</sup> Hear me now therefore, O ye children, and depart not from
          the words of my mouth.
        </p>

        <p>
          <sup>8</sup> Remove thy way far from her, and come not nigh the door
          of her house:
        </p>

        <p>
          <sup>9</sup> Lest thou give thine honour unto others, and thy years
          unto the cruel:
        </p>

        <p>
          <sup>10</sup> Lest strangers be filled with thy wealth; and thy
          labours be in the house of a stranger;
        </p>

        <p>
          <sup>11</sup> And thou mourn at the last, when thy flesh and thy body
          are consumed,
        </p>

        <p>
          <sup>12</sup> And say, How have I hated instruction, and my heart
          despised reproof;
        </p>

        <p>
          <sup>13</sup> And have not obeyed the voice of my teachers, nor
          inclined mine ear to them that instructed me!
        </p>

        <p>
          <sup>14</sup> I was almost in all evil in the midst of the
          congregation and assembly.
        </p>

        <p>
          <sup>15</sup> Drink waters out of thine own cistern, and running
          waters out of thine own well.
        </p>

        <p>
          <sup>16</sup> Let thy fountains be dispersed abroad, and rivers of
          waters in the streets.
        </p>

        <p>
          <sup>17</sup> Let them be only thine own, and not strangers' with
          thee.
        </p>

        <p>
          <sup>18</sup> Let thy fountain be blessed: and rejoice with the wife
          of thy youth.
        </p>

        <p>
          <sup>19</sup> Let her be as the loving hind and pleasant roe; let her
          breasts satisfy thee at all times; and be thou ravished always with
          her love.
        </p>

        <p>
          <sup>20</sup> And why wilt thou, my son, be ravished with a strange
          woman, and embrace the bosom of a stranger?
        </p>

        <p>
          <sup>21</sup> For the ways of man are before the eyes of the Lord, and
          he pondereth all his goings.
        </p>

        <p>
          <sup>22</sup> His own iniquities shall take the wicked himself, and he
          shall be holden with the cords of his sins.
        </p>

        <p>
          <sup>23</sup> He shall die without instruction; and in the greatness
          of his folly he shall go astray.
        </p>

        <blockquote className="copyright">{copyright}</blockquote>
      </div>
    </>
  )
}

export default IndexPage
