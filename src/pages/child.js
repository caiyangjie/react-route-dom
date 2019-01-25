import React, { Component } from "react";
import "./child.css";

class child extends Component {
  render() {
    const verse_id = 
      {
        "dufu":
          "<div><p>岱宗夫如何，齐鲁青未了。</p><p>造化钟神秀，阴阳割昏晓。</p><p>荡胸生曾云，决眦入归鸟。</p><p>会当凌绝顶，一览众山小。</p></div>",
        "libai": "<div><p>床前明月光，疑是地上霜。</p><p>举头望明月，低头思故乡。</p></div>",
        "taotao":
          "<div><p>种豆南山下，草盛豆苗稀。</p><p>晨兴理荒秽，带月荷锄归。</p><p>道狭草木长，夕露沾我衣。</p><p>衣沾不足惜，但使愿无违。</p></div>"
      };
    
    const id = this.props.match.params.id;
    console.log("  " + verse_id[id]);
    return (<div className="main" dangerouslySetInnerHTML={{__html: verse_id[id]}}></div>);
  }
}

export default child;
