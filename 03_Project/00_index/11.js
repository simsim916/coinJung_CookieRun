export default function NationContainer({ imgList, getNationIdx, selectIdx }) {
    const nationBox = new Array(imgList.length).fill(0);   // 이미지 크기만큼의 nationBox 를 생성하기 위한 배열 생성.


    // nationBox.forEach((el, i, ar) => {
    //     const opacity = i === selectIdx ? '1' : '.5';

    //     ar[i] = <a
    //         key={`nation${i + 1}`}
    //         className={`nationBox nation${i + 1}`}
    //         href="/"
    //         style={{opacity}}
    //         onClick={getNationIdx}>
    //         {i + 1}
    //     </a>
    // });

    // return (
    //     <div className='nation_container'>
    //         {nationBox}
    //     </div>
    // );


    // ===============================================================================
    /* imgList 배열을 활용하면 되므로 map 메서드의 경우 별도의 배열 선언 불필요 */

    return (
        <div className='nation_container'>
            {
                imgList.map((el, i) => {
                    const opacity = i === selectIdx ? '1' : '.5';

                    return <a
                        key={`nation${i + 1}`}
                        className={`nationBox nation${i + 1}`}
                        href="/"
                        style={{ opacity }}
                        onClick={getNationIdx}>
                        {i + 1}
                    </a>;
                })
            }
        </div>
    );
}