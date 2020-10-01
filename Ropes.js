class Ropes{
    constructor(bodyA,bodyB,offSetX,offSetY){
        this.offSetX=offSetX
        this.offSetY=offSetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offSetX,y:this.offSetY}
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var bodyA=this.rope.bodyA.position
        var bodyB=this.rope.bodyB.position
        strokeWeight(2)
        var Anchor1X=bodyA.x
        var Anchor1Y=bodyA.y
        
        var Anchor2X=bodyB.x+this.offSetX
        var Anchor2Y=bodyB.y+this.offSetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    }
}