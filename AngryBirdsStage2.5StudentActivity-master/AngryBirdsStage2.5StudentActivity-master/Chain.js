class Chain{
    constuctor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffnes: 0.04,
            length:10,
        } 
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
       // var pointA = this.chain.bodyA.position;
        //var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}