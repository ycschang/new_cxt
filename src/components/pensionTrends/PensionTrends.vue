<template>
  <div class="pensionTrends">
    <Navbar></Navbar>
    <div class="top-class">
      <div class="top-left-class">
        <div class="left-img1"></div>
        <div class="left-img2"></div>
      </div>
      <div class="top-right-class">
        <div class="right-img1"></div>
      </div>
    </div>
    <div class="bottom-class">
      <div class="bt-top-class">
        <div class="t-left-class">
          <p class="number1">01</p>
          <div class="left-line-class"></div>
          <div class="left-content-class">椿熙喜讯</div>
        </div>
        <div class="t-right-class">
          <!--<div class="tr-content-class" v-for="(item1,index1) in data1" :key="index1">
            <p class="content-title">{{item1.title}}</p>
            <p class="content-content">{{item1.content}}</p>
            <p class="content-link">查看详情<span class="right-icon"></span></p>
          </div>-->
          <div class="tr-content-class" v-for="(item1,index1) in data1" :key="index1">
            <div class="text more" ref="more" > 占位</div>
            <p class="content-title" >{{item1.article_s_name}}</p>
            <p class="content-content" :class="{'retract': item1.status}" :style="{'max-height':item1.status ? textHeight: ''}" ref="textContainer">{{item1.article_content}}</p>
            <p class="content-link" v-if="item1.status" @click="item1.status = false">查看详情<span class="right-icon"></span></p>
            <p class="content-link" v-if="item1.status == false" @click="item1.status = true">收起<span class="right-icon"></span></p>
          </div>
          <!--<div class="content" v-for="(al,index3) in als" :key="index3">
            <div class="text more" ref="more">
              占位
            </div>
            <div class="text">
              <div :class="{'retract': al.status}" :style="{'max-height':al.status ? textHeight: ''}" ref="textContainer">
                {{al.byrw}}
              </div>
              <div class="btn">
                <p v-if="al.status" @click="al.status = false">展开</p>
                <p v-if="al.status == false" @click="al.status = true">收起</p>
              </div>
            </div>
          </div>-->
        </div>
      </div>
      <div class="bt-bottom-class">
        <div class="body-class">
          <div class="b-left-class">
            <p class="number2">02</p>
            <div class="b-left-line-class"></div>
            <div class="b-left-content-class">领导参访</div>
          </div>
          <div class="b-right-class">
            <!--<div class="bottom-img-class"></div>
            <div class="tr-content-class" v-for="(item2,index2) in data2" :key="index2">
              <p class="content-title">{{item2.title}}</p>
              <p class="content-content">{{item2.content}}</p>
              <p class="content-link">查看详情<span class="right-icon"></span></p>
            </div>-->
            <div class="bottom-img-class"></div>
            <!--<div class="tr-content-class" v-for="(item2,index2) in data2" :key="index2">
              <p class="content-title">{{item2.article_s_name}}</p>
              <p class="content-content">{{item2.article_content}}</p>
              <p class="content-link">查看详情<span class="right-icon"></span></p>
            </div>-->
            <div class="tr-content-class" v-for="(item2,index2) in data2" :key="index2">
              <div class="text more" ref="more" > 占位</div>
              <p class="content-title" >{{item2.article_s_name}}</p>
              <p class="content-content" :class="{'retract': item2.status}" :style="{'max-height':item2.status ? textHeight: ''}" ref="textContainer">{{item2.article_content}}</p>
              <p class="content-link" v-if="item2.status" @click="item2.status = false">查看详情<span class="right-icon"></span></p>
              <p class="content-link" v-if="item2.status == false" @click="item2.status = true">收起<span class="right-icon"></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Navbar from "@/components/nav/Navbar";
import Bottom from "@/components/nav/Bottom";

export default {
  name: "PensionTrends",
  components: {
    Navbar,
    Bottom
  },
  data() {
    return {
      data1: [{
        title: '椿熙堂海宁丨盐官镇居家养老服务中心建成投入使用',
        content: '11月3日上午，盐官镇居家养老服务中心投入使用。该中心地理位置优越，位于海宁市盐官镇桃源村，建筑面积539平方米'
      },{
        title: '椿熙喜报丨南京市汤山街道拟入围国家第四批智慧健康养老示范街道名单',
        content: '根据《工业和信息化部办公厅 民政部办公厅 国家卫生健康委员会办公厅关于开展第四批智慧健康养老应用试点示范的通知》'
      },{
        title: '椿熙喜讯丨无锡椿熙堂荣获2020年无锡网络创益大赛优胜奖',
        content: '为进一步探讨无锡市互联网发展状况，展示无锡互联网创新发展成果，无锡市委网信办、市民政局、共青团无锡市委员会共同主办“2020首届无锡互联网创意项目大赛”。5月30日大赛正式启动。'
      }],
      data2: [{
        title: '椿熙快讯丨马鞍山市老教委考察团莅临汤山椿熙堂调研考察',
        content: '2020年11月06日，安徽省马鞍山市老年教育委员会常务副主任-汪永年带队一行26人来到汤山椿熙堂居家养老服务中心暨汤山老年大学椿熙分校参观。'
      },{
        title: '乌镇风采丨参访周报',
        content: '上周椿熙堂乌镇居家养老服务照料中心共接待6批参访，公司副总经理戴勇，亲自接待了盛泽、慈溪两地民政机关的领导以及华东政法大学社会发展学员的师生朋友们。'
      },
      ],
      als: [
        { "id": 1, "wsid": "bf2a342c-23ba-4ed9-9002-df13c2729504", "ah": "（2014）行提字第34号", "ajmc": "贾玉英与贾涛、济南市市中区住房保障和房产管理局行政登记申诉行政判决书", "zssqr": "贾玉英", "bsqr": "济南市市中区住房保障和房产管理局", "dsr": "贾涛", "spcx": "再审", "fymc": "最高人民法院", "cprq": "2015-02-02", "fbrq": "2015-10-19", "zsfy": "山东省高级人民法院", "zsah": "（2013）鲁行再字第1号", "spz": "孟凡平", "ay": "房屋行政登记", "ygsc": "一审原告贾玉英诉称：自1987年10月8日开始，贾玉英就与前夫杨长富一起租赁济南市市中区经九路37号北屋4间直管公房（以下简称经九路37号房屋）。与前夫离婚后，贾玉英本人一直租住该公房，直到被拆迁。2009年5月18日，贾玉英被以第三人的身份追加进了贾涛诉市中区房管局的行政诉讼案，得知在2001年1月20日，市中区房管局将其一直承租的经九路37号房屋在其不知情的情况下又租给了贾涛，并且以贾玉英的名义伪造了一系列手续，将经九路37号房屋的承租人由贾玉英变更为了贾涛。市中区房管局的行为侵犯了其合法权益，依据《中华人民共和国行政诉讼法》等相关法律法规，提起行政诉讼，请求人民法院撤销市中区房管局将经九路37号房屋的承租人由贾玉英变更为贾涛的具体行政行为。", "bgbc": "一审被告市中区房管局辩称：该局所作具体行政行为程序合法，符合法律规定，且贾玉英的起诉已经超过法定诉讼时效，请求人民法院依法驳回贾玉英的起诉，维持该局作出的具体行政行为。", "byrw": "本院认为，本案的争议焦点为：第一，贾玉英的起诉是否超过了法定的起诉期限。第二，市中区房管局于2001年作出的房屋变更登记行为是否合法。第三，原一、二审判决的判决方式是否正确。\n一、关于贾玉英的起诉是否超过法定的起诉期限问题。\n本案中，市中区房管局曾就本案争议房屋作出过两次直管公房使用权转让登记审批的具体行政行为，即2001年1月21日将涉案房屋的承租人由贾玉英变更为贾涛、2003年5月14日将承租人由贾涛变更为贾玉英的行政行为。由于市中区房管局2001年1月21日作出被诉具体行政行为时，贾玉英并未到场办理承租人变更登记手续，市中区房管局和贾涛均未能提供证据证实贾玉英知道或者应当知道该变更登记行为内容的具体时间，故不能认定贾玉英于2001年1月21日就知道该具体行政行为存在。市中区房管局于2003年5月14日依据贾玉英的申请，将涉案房屋的承租人由贾涛变更为贾玉英，可以推定贾玉英于2003年5月14日知道了2001年1月21日作出的变更登记行为。\n根据《若干问题的解释》第四十一条、第四十三条的规定，公民、法人或者其他组织不知道行政机关作出的具体行政行为内容的，其起诉期限从知道或者应当知道该具体行政行为内容之日起计算，但从知道或者应当知道具体行政行为内容之日起最长不得超过2年；由于不属于起诉人自身的原因超过起诉期限的，被耽误的时间不计算在起诉期间内。《若干问题的解释》第四十三条规定的“不属于起诉人自身的原因”，是指如果起诉期限被耽误不能归结于起诉人自身原因，就不能让起诉人承担不利的法律后果，应当尽可能的对起诉人起诉予以受理或尽可能的提供救济机会。基于行政法上的信赖原则，由于2001年的变更登记行为已被市中区房管局2003年的登记行为予以变更，贾玉英当时没有必要对2001年的变更登记行为提起诉讼。此时贾玉英没有行使诉权的原因系因市中区房管局的第二次变更登记行为造成，不属于贾玉英自身的原因超过起诉期限的情况，被耽误的时间不应计算在起诉期限之内。在2003年的变更登记行为因贾涛的起诉被济南市市中区人民法院一审判决撤销后，贾玉英即提起了本案之诉，没有超过法定的起诉期限。\n二、关于市中区房管局于2001年作出的房屋变更登记行为是否合法的问题。\n贾涛主张2001年的变更登记经过贾玉英同意，但并未提供有效证据予以证明。在一审庭审及本院听证过程中，贾涛均自认2001年进行变更登记行为时，提交的申请书及转让协议中的“贾玉英”签名均非贾玉英本人所签。贾涛主张贾玉英认可2001年的房屋变更登记行为，并且委托杨长富代为协助办理变更登记，但没有提供相应证据予以证明，该主张不能成立。根据当时有效的《置换管理办法》第十条第二项的规定，转让直管公房使用权按下列程序进行：凡允许转让的，转让人与受让人应分别持申请书、直管公房租赁证、租赁契约、户籍证明和身份证明等填写《济南市直管公房使用权转让审批表》。市中区房管局在贾涛办理承租人变更登记手续时，在原承租人贾玉英未到场的情况下，既未核实申请材料中的签名是否贾玉英本人所签，又未核实转让房产是否其真实意思表示，即作出变更登记行为，未尽到审慎的审查职责。市中区房管局2001年对涉案房屋所作的变更登记行为主要证据不足，违反法定程序，依法应予撤销。\n三、关于原一、二审判决的裁判方式是否正确的问题。\n原一、二审判决均采用了确认违法的判决方式。根据《若干问题的解释》第五十七条第二款第二项的规定，被诉具体行政行为违法，但不具有可撤销内容的，可以作出确认被诉具体行政行为违法或者无效的判决。济南市市中区人民法院一审中认定“由于被告已于2003年5月14日将上述房屋的承租人由贾涛变更登记为贾玉英，故被告于2001年1月21日作出的变更登记行为已不具有可撤销内容。”但济南市市中区人民法院已于2009年6月26日作出（2009）市行初字第42号行政判决，撤销了市中区房管局2003年的房屋变更登记行为，此时生效的行政行为为2001年的房屋变更登记行为。该院认为2001年的变更登记行为不具有可撤销的内容，显属认定事实不清，适用法律错误。\n2009年10月20日，济南市中级人民法院作出（2009）济行终字第142号行政判决，维持了济南市市中区人民法院（2009）市行初字第42号行政判决。本案二审在济南市中级人民法院（2009）济行终字第142号行政判决作出之后，该院仍以与一审同样的理由作出了确认判决，亦属认定事实不清，适用法律错误。\n综上，原一、二审、再审法院的裁判确有错误，被诉具体行政行为主要证据不足、违反法定程序，依据《中华人民共和国行政诉讼法》第五十四条第二项、《最高人民法院关于执行﹤中华人民共和国行政诉讼法﹥若干问题的解释》第七十八条之规定，", "pjrx": "判决如下：\n一、撤销山东省高级人民法院（2013）鲁行再字第1号行政裁定、（2010）鲁行再终字第203号行政裁定；\n二、撤销济南市中级人民法院（2009）济行终字第175号行政判决、济南市市中区人民法院（2009）市行初字第68号行政判决；\n三、撤销济南市市中区房产管理局于2001年1月21日作出的将济南市市中区经九路37号北屋4间公有房屋承租人由贾玉英变更登记为贾涛的具体行政行为。\n一审案件受理费50元，由济南市市中区房产管理局负担；二审案件受理费50元，由贾涛负担。\n本判决为终审判决。", "ft": "《中华人民共和国行政诉讼法》第五十四条第二项;", "cpyz": "1由于不属于起诉人自身的原因超过起诉期限的，被耽误的时间不计算在起诉期间内。“不属于起诉人自身的原因”，是指如果起诉期限被耽误不能归结于起诉人自身原因，就不能让起诉人承担不利的法律后果，应当尽可能的对起诉人起诉予以受理或尽可能的提供救济机会<br>2、房管部门在办理承租人变更登记手续时，在原承租人未到场的情况下，既未核实申请材料中的签名是否原承租人本人所签，又未核实转让房产是否其真实意思表示，即作出变更登记行为，未尽到审慎的审查职责", "fy": "高院" },
        { "id": 3, "wsid": "ad07fe62-e7d9-457e-9e30-842a8536301d", "ah": "（2016）最高法行申876号", "ajmc": "周忠达再审行政裁定书", "zssqr": "周忠达", "bsqr": "要求撤销临安人民政府", "dsr": "", "spcx": "再审审查与审判监督", "fymc": "最高人民法院", "cprq": "2015-07-29", "fbrq": "2016-12-14", "zsfy": "浙江省高级人民法院", "zsah": "(2015)浙行受终字第230号", "spz": "孟凡平\n代理", "ay": "房屋登记", "ygsc": "周忠达申请再审称：1.其本人不是(2005)江民一初字第253号民事判决书（以下简称253号判决）中的被告，与原告谢根耀无债务关系，其没有收到杭州市江干区人民法院的传票、诉状及法律文书，所以与253号判决没有关系，253号判决对其不产生法律效力；2.临安市人民政府无临安市人民法院的民事判决书，无法律依据来对周忠达的房产实施行政行为；3.同一套商品住宅房在没有作废首本房产证时，又重复制作、发放第二本房产证，系错误行政行为；4.其房产证、契税证、土地证的原件都在，足以证明谢丽萍的房产证是假的。请求判令撤销浙江省高级人民法院(2015)浙行受终字第230号行政裁定、撤销谢丽萍的房产证。申请人申请再审称自己并不是（2005）江民一初字第253号民事判决书中的被告等理由，均实质上是对杭州市江干区人民法院的民事判决执行行为提出的异议，不属于本案的审查范围。\n驳回周忠达的再审申请。\n审　判　长　孟　　　　凡　　　　平\n代理审判员　厉文华代理审判员厉文华\n代理审判员　梁　　　　　　　　　爽\n二〇一五年七月二十九日\n书　记　员　李　　　　　　　　　旸。", "bgbc": "", "byrw": "本院经审查认为：周忠达起诉要求撤销临安人民政府锦城移字第0012110号和锦城移字第00××65号房屋权属证书。经原审法院查明，该权属证书是临安市人民政府根据杭州市江干区人民法院(2005)江执字第430号民事裁定书及协助执行通知书办理的房屋登记行为。《最高人民法院关于审理房屋登记案件若干问题的规定》第二条第一款明确规定，房屋登记机构根据人民法院的法律文书或者协助执行通知书办理的房屋登记行为，公民不服提起行政诉讼的，人民法院不予受理。故原审法院以周忠达的起诉不符合起诉条件为由裁定不予立案，并无不当。申请人申请再审称自己并不是（2005）江民一初字第253号民事判决书中的被告等理由，均实质上是对杭州市江干区人民法院的民事判决执行行为提出的异议，不属于本案的审查范围。\n驳回周忠达的再审申请。", "pjrx": "", "ft": "《最高人民法院关于审理房屋登记案件若干问题的规定》第二条第一款;", "cpyz": "房屋登记机构根据人民法院的法律文书或者协助执行通知书办理的房屋登记行为，公民不服提起行政诉讼的，人民法院不予受理", "fy": "高院" },
        { "id": 4, "wsid": "d61c2476-dc6a-47b3-be6f-6a832fb83a13", "ah": "（2015）行终字第1号", "ajmc": "辽宁中宇房地产开发有限公司行政强制二审行政裁定书", "zssqr": "辽宁中宇房地产开发有限公司", "bsqr": "沈阳市人民政府", "dsr": "", "spcx": "二审", "fymc": "最高人民法院", "cprq": "2015-07-31", "fbrq": "2015-10-29", "zsfy": "辽宁省高级人民法院", "zsah": "（2015）辽立行初字第00001号", "spz": "郭修江", "ay": "暂扣、移交公司证件", "ygsc": "中宇公司上诉称：1、本案系重大行政诉讼案件。被上诉人沈阳市人民政府和沈阳市人民检察院作为相当级别的机关，由上一级法院审理才能体现公正性。2、本案系特别复杂的行政案件。案件涉及面广、诉讼标的额特别巨大，其审理结果直接影响到两起冤假错案的纠错处理，涉及到上诉人数亿元资产的处理和归属，后果特别严重。3、原审存在重大违法行为。根据行政诉讼法第十六条规定，重大、复杂、标的额特别巨大的案件属于高级人民法院一审的案件，本案由高级人民法院一审有法律和公报案例依据。请求：撤销辽宁省高级人民法院（2015）辽立行初字第00001号裁定；裁定辽宁省高级人民法院立案受理或者指定北京市高级人民法院、上海市高级人民法院受理本案。", "bgbc": "", "byrw": "本院经审查认为，中宇公司原审诉讼请求有两个：一是确认沈阳市人民政府于2003年9月5日作出的将暂扣中宇公司证件移交沈阳市城乡建设委员会的会议处理决定违法；二是确认沈阳市人民检察院依据该决定将暂扣公司证件移交沈阳市城乡建设委员会的行为违法。结合中宇公司原审诉讼请求及上诉理由，对本案是否符合法定立案条件，分述如下：\n（一）关于确认沈阳市人民政府会议处理决定违法的诉求。《最高人民法院关于行政诉讼证据若干问题的规定》第四条第一款规定：”公民、法人或者其他组织向人民法院起诉时，应当提供其符合起诉条件的相应的证据材料。”也就是说，起诉人提起行政诉讼，应当对其起诉是否符合法定条件承担初步的证明责任。《中华人民共和国行政诉讼法》第四十九条第（三）项规定，提起诉讼应当符合下列条件：”有具体的诉讼请求和事实根据”。所谓”具体的诉讼请求”前提是要有明确的被诉行政行为。起诉人提起行政诉讼应当初步证明被诉行政行为的存在。如果不能证明被诉行政行为的存在，起诉人的起诉不符合法定条件，人民法院应当依照《最高人民法院关于执行〈中华人民共和国行政诉讼法〉若干问题的解释》第四十四条第一款第（十一）项之规定，裁定不予受理；已经受理的，裁定驳回起诉。本案中，中宇公司一审请求”确认沈阳市人民政府于2003年9月5日作出的将暂扣中宇公司证件移交沈阳市城乡建设委员会的会议处理决定违法”，但是，并未提供充分证据证明沈阳市政府作出过相关的”会议处理决定”，其所提供的2009年12月3日沈阳市人民检察院向其出具的《检察机关处理信访事项答复意见书》也只能证明”2003年9月5日，联合调查组由中共沈阳市纪委牵头召开协调会&hellip;&hellip;决定将暂扣证件移交市城乡建设管理委员会”，不能证明沈阳市政府曾就相关移交事项作出对外发生法律效力的行政决定。因此，中宇公司的该项起诉不符合起诉的法定条件，原审裁定不予立案的处理结果并无不当。\n（二）关于确认沈阳市人民检察院移交行为违法的诉求。《中华人民共和国行政诉讼法》第二条规定：”公民、法人或者其他组织认为行政机关和行政机关工作人员的行政行为侵犯其合法权益，有权依照本法向人民法院提起诉讼。””前款所称行政行为，包括法律、法规、规章授权的组织作出的行政行为。”据此，行政诉讼中，只有依法享有行政职权的行政机关或者法律、法规、规章授权的组织实施的行为，才可能是行政诉讼法规定的可诉的行政行为；只有行政机关和法律、法规、规章授权的组织，才可能成为行政诉讼的适格被告。中宇公司以沈阳市人民检察院为被告，对其移交暂扣物品的行为提起行政诉讼。根据上述规定，沈阳市人民检察院移交暂扣物品的行为不是行政行为，不属于人民法院行政诉讼受案范围；沈阳市人民检察院不是行政机关或者法律、法规、规章授权的组织，亦不是行政诉讼的适格被告。根据《最高人民法院关于执行〈中华人民共和国行政诉讼法〉若干问题的解释》第四十四条第一款第（一）、（十一）项的规定，本案原审对中宇公司的第二项诉讼请求裁定不予立案，结果亦无不当。\n（三）关于高级人民法院管辖一审案件的标准。《中华人民共和国行政诉讼法》第十六条规定：”高级人民法院管辖本辖区内重大、复杂的第一审行政案件。”对于条文中”重大、复杂”，法律和司法解释并未作出明确界定和解释，高级人民法院应当根据案件的性质、疑难程度、规则价值、社会影响等，全面分析考量认定。由于法律规定的抽象性、原则性，本条规定实质是赋予了高级人民法院对何谓”本辖区内重大、复杂的第一审行政案件”一定程度的司法自由裁量权，上级法院一般应当尊重下级法院的判断。据此，中宇公司以被告为沈阳市政府、案情特别复杂、涉及面广、诉讼标的特别巨大等为由，主张本案应属高级人民法院管辖的”重大、复杂”的第一审行政案件，其理由是否成立，应属辽宁省高级人民法院的司法自由裁量权范畴。二审中，上诉人未提出新的、更有说服力的事实和理由，本院对原审裁定理由和结果应予维持。当然，就本案而言，原审未对本案起诉人的起诉是否有具体的诉讼请求和事实根据、被告是否适格、起诉事项是否属于人民法院受案范围等事关中宇公司起诉成立与否的其他法定条件进行审查，确有不妥，本院予以纠正。\n综上，原审裁定认定事实清楚，适用法律、法规正确，应予维持。中宇公司的上诉理由不能成立。依照《中华人民共和国行政诉讼法》第八十九条第一款第(一)项之规定，", "pjrx": "裁定如下：\n驳回上诉，维持原裁定。\n本裁定为终审裁定。", "ft": "《最高人民法院关于行政诉讼证据若干问题的规定》第四条第一款;\n《中华人民共和国行政诉讼法》第四十九条第（三）项;\n《最高人民法院关于执行〈中华人民共和国行政诉讼法〉若干问题的解释》第四十四条第一款;\n《中华人民共和国行政诉讼法》第二条;\n《最高人民法院关于执行〈中华人民共和国行政诉讼法〉若干问题的解释》第四十四条第一款;\n《中华人民共和国行政诉讼法》第十六条;\n《中华人民共和国行政诉讼法》第八十九条第一款;", "cpyz": "起诉人提起行政诉讼，应当对其起诉是否符合法定条件承担初步的证明责任。”具体的诉讼请求”前提是要有明确的被诉行政行为，如果不能证明被诉行政行为的存在，起诉人的起诉不符合法定条件<br>2、人民检察院移交暂扣物品的行为不是行政行为，不属于人民法院行政诉讼受案范围", "fy": "高院" }
      ],
      textHeight: null
    }
  },
  created() {
    let _this = this;
    let params = new URLSearchParams();
    params.append('position', '养老动态');
    params.append('article_m_name', '椿熙喜讯');
    this.axios.post('http://localhost:8080/public/getContentInfo',params)
        .then(function (res) {
          //console.log(res.data.data());
          _this.data1 = res.data.data1;
          _this.data2 = res.data.data2;
          //alert(JSON.stringify(res.data.data));
        });
  },
  mounted() {
    this.als.forEach((ele, index) => {
      this.$set(this.als, index, Object.assign({}, ele, { status: null }))
    })
    // DOM 加载完执行
    this.$nextTick(() => {
      this.calculateText()

    })

    window.onresize = () => {
      this.als.forEach((ele, index) => {
        this.$set(this.als, index, Object.assign({}, ele, { status: null }))
      })
      setTimeout(() => {
        this.calculateText()
      }, 0)
    }
  },
  methods: {
    // 计算文字 显示展开 收起
    calculateText() {
      // 获取一行文字的height 计算当前文字比较列表文字
      let oneHeight = this.$refs.more.scrollHeight
      //let twoHeight = oneHeight * 2 || 40
      let twoHeight = oneHeight * 2 || 50
      this.textHeight = `${twoHeight}px`
      let txtDom = this.$refs.textContainer
      for (let i = 0; i < txtDom.length; i++) {
        let curHeight = txtDom[i].offsetHeight
        if (curHeight > twoHeight) {
          this.$set(this.als, i, Object.assign({}, this.als[i], { status: true }))
        } else {
          this.$set(this.als, i, Object.assign({}, this.als[i], { status: null }))
        }
      }
    }
  }
}
</script>

<style scoped>
	.number1 {
		margin-top: 10px;
	}

	.number2 {
		margin-top: -8px;
	}

	.pensionTrends {
		width: 100%;
		height: auto;
	}

	.top-class {
		width: 100%;
		height: 400px;
		justify-content: center;
		/*子元素水平居中*/
		align-items: center;
		/*子元素垂直居中*/
		display: -webkit-flex;
		padding-top: 20px;
	}

	.top-left-class {
		width: 300px;
		height: auto;
	}

	.top-right-class {
		width: 550px;
		height: auto;
	}

	.left-img1 {
		background-image: url("../../assets/images/pensionTrends-img/left-1.png");
		background-repeat: no-repeat;
		background-size: 280px 180px;
		width: 280px;
		height: 180px;
		padding: 5px;
	}

	.left-img2 {
		background-image: url("../../assets/images/pensionTrends-img/left-2.png");
		background-repeat: no-repeat;
		background-size: 280px 180px;
		width: 280px;
		height: 180px;
		padding: 5px;
	}

	.right-img1 {
		background-image: url("../../assets/images/pensionTrends-img/right-1.png");
		background-repeat: no-repeat;
		background-size: 550px 370px;
		width: 550px;
		height: 370px;
	}
</style>
<style scoped>
	.bottom-class {
		height: auto;
		width: 100%;
	}

	.bt-top-class {
		width: 100%;
		height: auto;
		justify-content: center;
		/*子元素水平居中*/
		display: -webkit-flex;
    margin-bottom: 30px;
	}

	.bt-bottom-class {
		width: 100%;
    height: auto;
    margin-bottom: 30px;
		justify-content: center;
		/*子元素水平居中*/
		display: -webkit-flex;
	}

	.t-left-class {
		width: 20%;
		height: auto;
	}

	.body-class {
		width: 60%;
	}

	.b-left-class {
		width: 20%;
		height: auto;
		float: left;
	}

	p {
		color: #1aba7a;
		font-size: 30px;
		height: 20px;
	}

	.left-line-class {
		border-left: 3px solid #1aba7a;
		height: 120px;
		margin-left: 15px;
	}

	.left-content-class {
		padding-top: 10px;
	}

	.b-left-line-class {
		border-left: 3px solid #1aba7a;
		height: 120px;
		margin-left: 15px;
	}

	.b-left-content-class {
		padding-top: 10px;
	}
</style>
<style scoped>
  .t-right-class{
    width: 40%;
  }
  .tr-content-class{
    border-bottom: 1px silver solid;
  }
  .content-title{
    color: black;
    font-weight: 400;
    font-size: 16px;
    height: 15px;
    line-height: 15px;
  }
  .content-content{
    color: #888888;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 12px;
    text-indent: 30px;
    height: auto;
  }
  .content-link{
    color: #1aba7a;
    margin-top: 20px;
    font-size: 9px;
    cursor: pointer;
    width: 90px;
  }
  .bottom-img-class{
    background-image: url("../../assets/images/pensionTrends-img/bottom-img.png");
    background-repeat: no-repeat;
    background-size: 675px 180px;
    width: 675px;
    height: 180px;
    padding: 5px;
  }
  .b-right-class{
    width: 80%;
    float: left;
  }
  .right-icon{
    background-image: url("../../assets/images/pensionTrends-img/right-icon.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: center;
    padding-left: 13px;
    margin-left: 10px;
  }
</style>
<style>
.content {
  display: flex;
  margin-bottom: 30px;
}

.text {
  position: relative;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #666666;
}

.retract {
  position: relative;
  overflow: hidden;
}

.retract:after {
  content: '.....';
  position: absolute;
  bottom: 0;
  /*right: 2px;
  width: 25px;
  padding-left: 30px;*/
  right: 2px;
  width: 25px;
  height: 18px;
  line-height: 4px;
  text-align: center;
  padding-left: 25px;
  background: linear-gradient(to right, transparent, #fff 45%);
}

.btn {
  position: absolute;
  right: 0;
  bottom: -30px;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #FFAD41;
  cursor: pointer;
}

.more {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #666666;
  visibility: hidden;
}
</style>
