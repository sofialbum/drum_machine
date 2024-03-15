const DrumPads = (props) => {
  return(props.drumPads.map((pad, index) => {
    return (
      <button className="drum-pad" onClick={() => props.play(pad.key, pad.name)} key={index} id={pad.name}>
        {pad.key}
        <audio className="clip" id={pad.key} src={pad.url} />
      </button>
    )
  }));
};

export default DrumPads;
