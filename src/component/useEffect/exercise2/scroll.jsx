import { useState, useEffect } from 'react';
import './styleScroll.css';
const Scroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = () => {
    const clientScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (clientScroll / height) * 100;

    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="scroll">
        <div className="stylesScroll" style={{ width: `${scrollTop}%` }}></div>
      </div>
      <p className="text">Chứng minh tình thương là hạnh phúc của con người </p>
      <p className="text2">
        {' '}
        Hạnh phúc từ trước đến nay luôn là cái mà con người ta luôn hướng tới.Nhưng khái niệm về
        hạnh phúc đối với mỗi người là hoàn toàn khác nhau.Có người cho rằng hạnh phúc là khi mình
        giàu có no đủ.Nhưng đối với em sự yêu thương mới là hạnh phúc của con người. Để tìm hiểu bất
        kể một vấn đề nào chúng ta phải hiểu khái niệm của nó.Vậy hạnh phúc là gì? Theo ý nghĩa cơ
        bản về hạnh phúc là cảm giác sung sướng khi hoàn thành được ý nguyện của mình. Còn tình
        thương là tình cảm nồng niệt gắn bó mật thiết,có trách nhiệm của người với người. Vậy tại
        sao quan điểm tình thương là hạnh phúc của con người lại được nhiều người tán thành.Vì đối
        với nhân dân ta quan niệm tình thương là hạnh phúc thì nó là truyền thống đi sâu vào trong
        lối sống đã có từ bao đời của nhân dân việt nam.Cùng với đó tình thương là sự sẻ chia,quan
        tâm lẫn nhau nó khiến chúng ta gần nhau hơn.Hạnh phúc đôi lúc chỉ đơn giản thế không cần cao
        hương mỹ vị,nhà lầu xe hơi. Sự yêu thương mang đến hạnh phúc luôn luôn là đề tài muôn thủa
        của thi,ca.Vì nó là điều rất cần thiết trong cuộc sống.Tuy nhiên tình thương có nhiều phương
        diện.Đầu tiên là tình thương trong gia đình.Chamẹ dành tình yêu thương cho con cái,anh chị
        em yêu thương lẫn nhau…Không có ai yêu thương chúng ta vô điều kiện như chamẹ mình. ‘’ Đi
        khắp thế gian không ai tốt bằng mẹ Gánh nặng cuộc đời không ai khổ bằng cha’’ Cha mẹ lúc nào
        cũng ở bên ta lo lắng cho ta từ khi còn đỏ hỏn chào đời.Lo lắng từng bữa ăn giấc ngủ.Xót
        xa,buồn bã khi ta vấp ngã không nghe lời.Rồi lại mỉm cười khi ta thành công trở thành người
        có ích cho xã hội.Vất vả là thế mà chưa lần nào cha mẹ bỏ rơi chúng ta.Vì đơn giản hạnh phúc
        của cha mẹ là được yêu thương chúng ta.Hạnh phúc của cha mẹ là nhìn thấy ta trưởng thành,vui
        vẻ.Nên sống sao cho tốt,yêu thương cha mẹ,để bớt được gánh nặng cho cha mẹ,làm cho cha mẹ
        vui lòng đó là những điều những người con rất cần làm.Vì sinh ra có bố mẹ vẫn còn bên mình
        là một điều may mắn không phải ai cũng có.Đó là điều nhiều người luôn mơ ước.Hãy luôn trân
        trọng những gì mình đang có.Với tình thương và hạnh phúc của cha mẹ với con cái. Trong tình
        cảm về gia đình còn có tình cảm về anh em,chị em.’’Anh em như thể tay chân,gà cùng một mẹ
        chớ hoài đá nhau…’’ Nếu anh em thuận hòa thì gia đình yên ấm,cha mẹ yên tâm vui vẻ.Gia đình
        hạnh phúc.Đó chính là sức mạnh và điều kì diệu mà tình thương mang lại. Một tình thương nữa
        mà ai ai cũng mong muốn được có.Đó chính là tình yêu đôi lứa.Nó là tình thương khi con người
        ta luôn nghĩ về nhau,quan tâm đến nhau,sống vì nhau.Và chỉ cần những món quà nhỏ thôi chỉ
        cần 1 lời chúc,hay 1 bó hoa đó đã là quá đủ khi họ yêu nhau.Nhiều khi chỉ cần 1 ánh mắt,hay
        nụ cười đã đủ làm xao xuyến,rung động…Và hạnh phúc bền chặt khi tình yêu thương trao đến
        nhau là chân thật. Em rât thích câu nói: ‘’ Có những nỗi nhớ không được đặt tên, có những
        yêu thương không được gửi trao, nhưng vẫn lâng lâng hạnh phúc vì được yêu đúng cảm xúc’’ Đó
        tình yêu và hạn phúc đơn giản chỉ thế. goài tình thương trong gia đình. Tình thương trong
        phạm vi xã hội cũng vô cùng quan trọng. Từ bao đời nay tình cảm đó đã được đưa vào thi ca
        nhiều như câu mà người dân việt nam nào cũng biết; ‘’ Bầu ơi thương lấy bì cùng Tuy rằng
        khác giống nhưng chung một dàn ‘’ Tình thương giữa những người dân việt nam, giữa con lạc
        cháu hồng,luôn luôn được coi trọng đặc biệt trong lịch sử dựng nước và giữ nước của dân tộc
        ta. Nếu không có tình yêu thương,đoàn kết tương trợ nhau,hi sinh không tiếc xương máu vì dân
        tộc. Thì liệu ngày nay chúng ta có được sống hạnh phúc,no ấm như ngày nay. Vì thế hãy luôn
        luôn sống và yêu thương nhau cùng nhau xây dựng đất nước Việt nam ngày càng phát triển. Đừng
        quên lời Bác Hồ đã nói ‘’ Đoàn kết,đoàn kết,đại đoàn kết ; Thành công,thành công,đại thành
        công’’ là thế. Mỗi chúng ta không phải ai cũng may mắn sinh ra trong gia đình giàu có,được
        bố mẹ yêu thương. Ngoài kia vẫn còn biết bao nhiêu đứa trẻ mồ côi,lang thang ngoài đường
        trong khi chúng ta vẫn chăn ấm đệm êm. Thế đã bao giờ ta nghĩ cần chia sẻ tình thương với
        những người khó khăn như thế. Em đã được có cơ hội đưa một chiếc bánh mỳ cho một người ăn
        xin ngoài đường. Ôi! cảm giác lúc đó thật khó tả,người run run vì sung sướng. Vì họ chỉ dơn
        giản cuối nhẹ người và cảm ơn em. Lúc đó em hiểu rằng cuộc sống này khi mình trao yêu thương
        cho một ai đó không chỉ người nhận thất hạnh phúc mà chính người cho còn vui hơn bao lần.
        Như câu nói ‘’ Cho đi một,nhận lại mười là thế’’ Đúng thế sau sự việc đó em đã có cho mình
        bài học về sự yêu thương,sự sẻ chia. Bạn đã bao giờ đi phát quà cho những trẻ em khó khăn
        vùng cao,không có áo mặc,cơm ăn cũng không có. Cho học hơi ấm họ trao cho mình nụ cười,niềm
        vui. Nụ cười của những đứa trẻ là một sức mạnh thần kì cho em. Cho em biết mình đang sống là
        người có ích,cần phải cho đi nhiều hơn nữa.Ôi! hạnh phúc đến lạ kì,’’khổ đau được san sẻ vơi
        nửa,hạnh phúc được san sẻ nhân đôi’’ Em chợt nhận ra rằng được yêu thương là một hạnh
        phúc,nhưng được yêu thương người khác còn hạnh phúc hơn. Mỗi người chỉ có một lần để sống,
        nên hãy luôn tận dụng cơ hội để cảm nhận cuộc sống của cuộc đời. Nên chúng ta hãy sống sao
        cho có ý nghĩa,đừng vô cảm với bất kì ai,đặc biệt với những người nghèo khổ. Hãy một lần dẫn
        một cụ già qua đường, cho một đứa bé ăn xin một đồng tiền. Xem bạn có run lên vì sung
        sướng,rồi chợt nhận ra rằng mình quá may mắn khi được sống,được yêu thương. Bạn sẽ làm theo
        lời tôi nói ngay hôm nay chứ? Vì đơn giản sống là để yêu thương. Để tình thương thực sự trở
        thành hạnh phúc của con người. Mỗi ngày chúng ta hãy học cánh mở rộng trái tim hơn, trao
        tình thương đến cho mọi người. Lúc đó hạnh phúc không chỉ đến với người nhận,mà còn cho
        chính chúng ta. Để mỗi buổi sáng thức dậy hít một hơi thật sâu,thở ra nhẹ nhõm rồi thầm
        nghĩ; ‘’ Cám ơn đời mỗi sớm mai thức dậy Cho ta một ngày nữa để yêu thương’’. Nguồn:
        https://vanmau.edu.vn/chung-minh-tinh-thuong-la-hanh-phuc-cua-con-nguoi-van-lop-12/#ixzz8EVMjzeYg
      </p>
    </div>
  );
};

export default Scroll;
